import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Info from "./pages/Info";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import "./App.css"
import { useEffect, useState } from "react";

function App() {
  // Przechowywanie danych o wiezniach
  const [prisoners, setPrisoners] = useState([])

  // Dane, ktore zmieniaja sie po kliknieciu w danego wieznia
  const [currentPrisoner, setCurrentPrisoner] = useState({_id:"", imie:"", nazwisko:"", cela:0})

  // Pobranie i aktualizacja danych z serwera
  async function getPrisoners() {
    // Pobranie danych z serwera metodą GET (Czytaj)
    let result = await fetch("http://localhost:3000", {
      method:"get"
    })
    // Zamiana danych na JSON
    let resJson = await result.json()
    // Aktualizacja danych o wiezniach
    setPrisoners(resJson)
    setCurrentPrisoner(resJson[0])
  }

  // Pobierz dane o wiezniach z serwera po zaladowaniu strony
  useEffect(() => {
    getPrisoners()
  }, [])

  // Aplikacja korzysta z ReactRouterDOM - biblioteka do poruszania się pomiędzy stronami
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/info" element={<Info prisoners={prisoners} setCurrentPrisoner={setCurrentPrisoner}/>}/>
        <Route path="/edit" element={<Edit currentPrisoner={currentPrisoner} getPrisoners={getPrisoners}/>}/>
        <Route path="/add" element={<Add getPrisoners={getPrisoners}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
