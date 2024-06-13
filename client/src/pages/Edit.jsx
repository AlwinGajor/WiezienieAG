import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Edit(props) {
  // Do przemieszczania się pomiędzy stronami
  const navigate = useNavigate()

  // Przechowywanie informacji z formularza
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [cell, setCell] = useState("")

  // Aktualizacja powyzszych informacji gdy zmieni się currentPrisoner
  useEffect(() => {
    setName(props.currentPrisoner.imie)
    setLastname(props.currentPrisoner.nazwisko)
    setCell(props.currentPrisoner.cela)
  }, [props.currentPrisoner])

  // Obsluga klikniecia przycisku Aktualizuj dane
  async function updatePrisoner() {
    try {
      // Wysłanie danych do serwera metodą PUT (zaktualizuj)
      await fetch(`http://localhost:3000/${props.currentPrisoner._id}`, {
        method:"put",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          imie:name,
          nazwisko:lastname,
          cela:parseInt(cell)
        })
      })
      // Zaktualizowanie obecnych danych o więźniach
      props.getPrisoners()
      // Zmiana strony na info
      navigate("/info")
    }
    catch (e) {
      alert("Nie udalo sie zaktualizowac wieznia")
      console.error(e)
    }
  }

  // Obsluga klikniecia przycisku Usun wieznia
  async function deletePrisoner() {
    try {
      // Wysłanie danych do serwera metodą PUT (usun)
      await fetch(`http://localhost:3000/${props.currentPrisoner._id}`, {
        method:"delete"
      })
      // Zaktualizowanie obecnych danych o więźniach
      props.getPrisoners()
      // Zmiana strony na info
      navigate("/info")
    }
    catch (e) {
      console.error(e)
      alert("Nie udalo sie usunac wieznia")
    }
  }

  return (
    <main>
      <div className="formContainer">
        <h1>Edytuj więźnia</h1>
        <label>Imie: <input value={name} onChange={(e) => setName(e.target.value)}/></label>
        <label>Nazwisko: <input value={lastname} onChange={(e) => setLastname(e.target.value)}/></label>
        <label>Cela: <input type="number" value={cell} onChange={(e) => setCell(e.target.value)}/></label>
        <span>
          <button onClick={updatePrisoner}>Aktualizuj dane</button>
        </span>
        <span>
          <button onClick={deletePrisoner}>Usuń więźnia</button>
        </span>
      </div>
    </main>
  )
}
