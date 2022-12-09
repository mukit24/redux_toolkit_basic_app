import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';

const ReservationCard = ({name,index}) => {
    const disptach = useDispatch();
  return (
    <div>
        <li onClick={() => {
            disptach(removeReservation(index));
            disptach(addCustomer(name));
        }}>{name}</li>
    </div>
  )
}

export default ReservationCard