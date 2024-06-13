import { useEffect, useState } from "react"

export default function Edit(props) {

  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [cell, setCell] = useState("")

  useEffect(() => {
    setName(props.currentPrisoner.imie)
    setLastname(props.currentPrisoner.nazwisko)
    setCell(props.currentPrisoner.cela)
  }, [props.currentPrisoner])

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <input value={lastname} onChange={(e) => setLastname(e.target.value)}/>
      <input value={cell} onChange={(e) => setCell(e.target.value)}/>
      <button>Aktualizuj dane</button>
      <button>Usuń więźnia</button>
    </div>
  )
}
