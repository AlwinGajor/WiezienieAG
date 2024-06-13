import { useNavigate } from "react-router-dom"

export default function Info(props) {
  const navigate = useNavigate()

  function clickHandler(prisoner) {
    props.setCurrentPrisoner(prisoner)
    navigate("/edit")
  }

  return (
    <div>
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
    </div>
  )
}
