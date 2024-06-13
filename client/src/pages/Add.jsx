import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Add(props) {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [cell, setCell] = useState("")

    async function handleClick() {
        try {
            let res = await fetch(`http://localhost:3000`, {
                method:"post",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                  imie:name,
                  nazwisko:lastname,
                  cela:parseInt(cell)
                })
            })
            console.log(await res.json())
            props.getPrisoners()
            navigate("/info")
        }
        catch (e) {
            alert("Nie udalo sie dodać wieznia")
            console.error(e)
        }
    }

    return (
        <main>
            <div className="formContainer">
                <h1>Dodaj więźnia</h1>
                <label>Imie: <input value={name} onChange={(e) => setName(e.target.value)}/></label>
                <label>Nazwisko: <input value={lastname} onChange={(e) => setLastname(e.target.value)}/></label>
                <label>Cela: <input type="number" value={cell} onChange={(e) => setCell(e.target.value)}/></label>
                <span><button onClick={handleClick}>Dodaj</button></span>
            </div>
        </main>
    )
}