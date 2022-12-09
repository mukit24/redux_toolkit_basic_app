import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from '../features/reservationSlice';
import customerReducer from '../features/customerSlice';

export const store = configureStore({
    reducer: {
        reservation: reservationReducer,
        customer: customerReducer,
    },
})