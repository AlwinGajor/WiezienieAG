import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleClick() {
        if (name=="alwin" && password=="123") {
            navigate("/info")
        } else {
            alert("Złe dane logowania")
        }
    }

    return (
        <main>
            <div className="formContainer">
                <h1>Zaloguj się!</h1><br/>
                <label>Nazwa: <input value={name} onChange={(e) => setName(e.target.value)}/></label>
                <label>Hasło: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/></label>
                <span><button onClick={handleClick}>Zaloguj</button></span>
            </div>
        </main>
    )
}