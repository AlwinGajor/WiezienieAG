import { Link, useNavigate } from "react-router-dom"

export default function Info(props) {
  // Do przemieszczania się pomiędzy stronami
  const navigate = useNavigate()

  // Obsługa kliknięcia w wieźnia
  function clickHandler(prisoner) {
    props.setCurrentPrisoner(prisoner)
    navigate("/edit")
  }

  return (
    <main>
      <div className="formContainer">
        <h1>Lista więźniów</h1>
        <div className="prisonersContainer">
        {
          props.prisoners.map((prisoner) => {
            return (
              <ul key={prisoner._id} className="prisoner" onClick={() => clickHandler(prisoner)}>
                <li>Imie: {prisoner.imie}</li>
                <li>Nazwisko: {prisoner.nazwisko}</li>
                <li>Cela: {prisoner.cela}</li>
              </ul>
            )
          })
        }
        </div>
        <span>
          <Link to="/add" className="addPrisoner">Dodaj więźnia</Link>
        </span>
      </div>
    </main>
  )
}
