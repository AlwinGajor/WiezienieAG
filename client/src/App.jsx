import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Info from "./pages/Info";
import Edit from "./pages/Edit";
import "./App.css"
import { useState } from "react";

function App() {

  const [prisoners, setPrisoners] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
