import { BookingStep } from "./types"

export const BOOKING_STEP_TEXT = {
    [BookingStep.BOOKING_INFO]: {
        header: "We will be happy to see you in our restaurant",
        text: "Tell us when you would like to visit us and how many guests there will be",
    },
    [BookingStep.PERSONAL_INFO]: {
        header: "Almost done!",
        text: "Leave us information so that we can contact you",
    },
}

export const DEFAULT_FORM_STTATE = {
    date: new Date().toISOString().split("T")[0],
    time: "",
    guests: 1,
    comment: "",
    firstName: "",
    secondName: "",
    phone: "",
}
