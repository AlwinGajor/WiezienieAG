import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Info from "./pages/Info";
import Edit from "./pages/Edit";
import "./App.css"
import { useEffect, useState } from "react";

function App() {

  const [prisoners, setPrisoners] = useState([])
  const [currentPrisoner, setCurrentPrisoner] = useState({_id:"", imie:"", nazwisko:"", cela:0})

  async function getPrisoners() {
    let result = await fetch("http://localhost:3000", {
      method:"get"
    })
    let resJson = await result.json()
    setPrisoners(resJson)
    setCurrentPrisoner(resJson[0])
    console.log(resJson)
  }

  useEffect(() => {
    getPrisoners()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/info" element={<Info prisoners={prisoners} setCurrentPrisoner={setCurrentPrisoner}/>}/>
        <Route path="/edit" element={<Edit currentPrisoner={currentPrisoner}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
