import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Edit(props) {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [cell, setCell] = useState("")

  useEffect(() => {
    setName(props.currentPrisoner.imie)
    setLastname(props.currentPrisoner.nazwisko)
    setCell(props.currentPrisoner.cela)
  }, [props.currentPrisoner])

  async function updatePrisoner() {
    try {
      await fetch(`http://localhost:3000/${props.currentPrisoner._id}`, {
        method:"put",
        body:{
          imie:name,
          nazwisko:lastname,
          cela:cell
        }
      })
      props.getPrisoners()
      navigate("/info")
    }
    catch (e) {
      alert("Nie udalo sie zaktualizowac wieznia")
      console.error(e)
    }
  }

  async function deletePrisoner() {
    try {
      await fetch(`http://localhost:3000/${props.currentPrisoner._id}`, {
        method:"delete"
      })
      props.getPrisoners()
      navigate("/info")
    }
    catch (e) {
      console.error(e)
      alert("Nie udalo sie usunac wieznia")
    }
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <input value={lastname} onChange={(e) => setLastname(e.target.value)}/>
      <input value={cell} onChange={(e) => setCell(e.target.value)}/>
      <button onClick={updatePrisoner}>Aktualizuj dane</button>
      <button onClick={deletePrisoner}>Usuń więźnia</button>
    </div>
  )
}
