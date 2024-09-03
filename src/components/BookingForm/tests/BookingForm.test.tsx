import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from ".."
import React from "react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import ConfirmedBooking from "../../ConfirmedBooking"

test("Renders the BookingForm headers", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <BookingForm />
        </MemoryRouter>,
    )
    const header = screen.getByText(
        "We will be happy to see you in our restaurant",
    )
    expect(header).toBeInTheDocument()
})

test("Change the BookingForm header", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <BookingForm />
        </MemoryRouter>,
    )
    const buttom = screen.getByText("Next")
    fireEvent.click(buttom)
    const header = screen.getByText("Almost done!")
    expect(header).toBeInTheDocument()
})

test("Date is preselected", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <BookingForm />
        </MemoryRouter>,
    )
    const dateInput = screen.getByLabelText("Choose date")
    expect(dateInput).toHaveValue(new Date().toISOString().split("T")[0])
})

test("Change date", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <BookingForm />
        </MemoryRouter>,
    )
    const dateInput = screen.getByLabelText("Choose date")
    fireEvent.change(dateInput, { target: { value: "2022-01-01" } })
    expect(dateInput).toHaveValue("2022-01-01")
})

test("Not possible submit form with invalid fields", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <BookingForm />
        </MemoryRouter>,
    )
    const buttom = screen.getByText("Next")
    fireEvent.click(buttom)
    const submitButtom = screen.getByText("Make Your reservation")
    fireEvent.click(submitButtom)
    expect(
        screen.queryByText("Thank you for your reservation!"),
    ).not.toBeInTheDocument()
})

test("Submit form with valid fields", async () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Routes>
                <Route path="/" element={<BookingForm />} />
                <Route path="/booking/success" element={<ConfirmedBooking />} />
            </Routes>
        </MemoryRouter>,
    )
    const dateInput = screen.getByLabelText("Choose date")
    fireEvent.change(dateInput, { target: { value: "2022-01-01" } })
    const timeInput = screen.getByLabelText("Choose time")
    fireEvent.change(timeInput, { target: { value: "17:00" } })
    const guestsInput = screen.getByLabelText("Number of guests")
    fireEvent.change(guestsInput, { target: { value: 2 } })
    const buttom = screen.getByText("Next")
    fireEvent.click(buttom)
    const firstNameInput = screen.getByTestId("firstName")
    fireEvent.change(firstNameInput, { target: { value: "John" } })
    const secondNameInput = screen.getByTestId("secondName")
    fireEvent.change(secondNameInput, { target: { value: "Doe" } })
    const phoneInput = screen.getByTestId("phone")
    fireEvent.change(phoneInput, { target: { value: "123456789" } })
    const submitButtom = screen.getByText("Make Your reservation")
    fireEvent.click(submitButtom)
    const result = await screen.findByText("Thank you for your reservation!")
    expect(result).toBeInTheDocument()
})
