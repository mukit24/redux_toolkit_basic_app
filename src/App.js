import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerCard from "./componenets/customerCard";
import ReservationCard from "./componenets/reservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const reservations = useSelector(state => state.reservation.value)
  const customers = useSelector( state => state.customer)

  const [addResInput, setaddResInput] = useState("")
  const disptach = useDispatch()

  const handleAddRes = () =>{
    if (!addResInput) return;
    disptach(addReservation(addResInput));
    setaddResInput("");
  }
  return (
    <div className="App">
      <h3>Reservation</h3>
      <input type="text" value={addResInput} onChange={(e) => setaddResInput(e.target.value)} />
      <button onClick={handleAddRes}>Add</button>
      <ul>
          { reservations.map( (res,index) => <ReservationCard name={res} index={index}/>)}
      </ul>
      <hr />
      <h3>Active Customer</h3>
      <ol>
      { customers.map( res => <CustomerCard name={res}/>)}
      </ol>
      <hr />
    </div>
  );
}

export default App;
