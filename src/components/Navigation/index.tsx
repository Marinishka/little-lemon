import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../../views/HomePage"
import BookingPage from "../../views/BookingPage"
import ConfirmedBooking from "../ConfirmedBooking"

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/success" element={<ConfirmedBooking />} />
        </Routes>
    )
}

export default Navigation
