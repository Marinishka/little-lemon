import React, {
    FormEvent,
    FormEventHandler,
    MouseEvent,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react"
import { BookingStep, BookingStepAction } from "./types"
import { BOOKING_STEP_TEXT, DEFAULT_FORM_STTATE } from "./constants"
import "./styles.scss"
import { fetchAPI, submitAPI } from "../../utils/apiUtils"
import { useNavigate } from "react-router-dom"

const BookingForm = () => {
    const [step, setStep] = useState(BookingStep.BOOKING_INFO)
    const [formState, setFormState] = useState(DEFAULT_FORM_STTATE)
    const [timeOptions, setTimeOptions] = useState<string[]>([])

    const navigate = useNavigate()

    const onChangeStepClick = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            const target = e.target as HTMLButtonElement
            const dataStep = target.dataset.step
            setStep((state) =>
                dataStep === BookingStepAction.BACK ? state - 1 : state + 1,
            )
        },
        [],
    )

    const onChangeForm: FormEventHandler<HTMLFormElement> = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            const { name, value } = e.target as
                | HTMLInputElement
                | HTMLSelectElement
            setFormState((state) => ({ ...state, [name]: value }))
        },
        [],
    )

    const onSubmitForm: FormEventHandler<HTMLFormElement> = useCallback(
        (e) => {
            e.preventDefault()
            submitAPI(formState).then(() => {
                navigate("/booking/success")
            })
        },
        [formState, navigate],
    )

    const isInvalid = useMemo(() => {
        console.log(formState.guests < 1 || formState.guests > 10)
        return (
            !formState.firstName ||
            !formState.secondName ||
            !formState.phone ||
            formState.guests < 1 ||
            formState.guests > 10
        )
    }, [formState])

    useEffect(() => {
        fetchAPI(new Date(formState.date)).then((data) => {
            setTimeOptions(data)
            setFormState((state) => ({ ...state, time: data[0] }))
        })
    }, [formState.date])

    return (
        <>
            <div className="booking__step">
                <h2 className="booking__step-title display-title">
                    {BOOKING_STEP_TEXT[step].header}
                </h2>
                <p className="booking__step-text lead-text">
                    {BOOKING_STEP_TEXT[step].text}
                </p>
            </div>
            <div className="booking__step-actions">
                <button
                    className={`booking__button button ${step === BookingStep.BOOKING_INFO ? "button--disabled" : ""}`}
                    data-step={BookingStepAction.BACK}
                    disabled={step === BookingStep.BOOKING_INFO}
                    onClick={onChangeStepClick}
                >
                    Back
                </button>
                <button
                    className={`booking__button button ${step === BookingStep.PERSONAL_INFO ? "button--disabled" : ""}`}
                    data-step={BookingStepAction.NEXT}
                    disabled={step === BookingStep.PERSONAL_INFO}
                    onClick={onChangeStepClick}
                >
                    Next
                </button>
            </div>
            <form
                className="booking__form"
                onChange={onChangeForm}
                onSubmit={onSubmitForm}
            >
                {step === BookingStep.BOOKING_INFO && (
                    <div className="booking__form-part">
                        <label
                            className="booking__label card-title"
                            htmlFor="res-date"
                        >
                            <span className="booking__label-title">
                                Choose date
                            </span>
                            <input
                                data-type="date"
                                defaultValue={formState.date}
                                className="booking__input"
                                name="date"
                                type="date"
                                id="res-date"
                            />
                        </label>

                        <label
                            className="booking__label card-title"
                            htmlFor="res-time"
                        >
                            <span className="booking__label-title">
                                Choose time
                            </span>

                            <select
                                className="booking__input"
                                name="time"
                                id="res-time"
                                data-type="time"
                                defaultValue={formState.time}
                            >
                                {(timeOptions || []).map((time) => (
                                    <option key={time}>{time}</option>
                                ))}
                            </select>
                        </label>

                        <label
                            className="booking__label card-title"
                            htmlFor="guests"
                        >
                            <span className="booking__label-title">
                                Number of guests
                            </span>
                            <div className="booking__input--container ">
                                <input
                                    name="guests"
                                    data-type="guests"
                                    defaultValue={formState.guests}
                                    className="booking__input "
                                    type="number"
                                    placeholder="1"
                                    min="1"
                                    max="10"
                                    id="guests"
                                />

                                {(formState.guests < 1 ||
                                    formState.guests > 10) && (
                                    <span className="booking__required-comment">
                                        The value must be between 1 and 10.
                                    </span>
                                )}
                            </div>
                        </label>

                        <label
                            className="booking__label card-title"
                            htmlFor="occasion"
                        >
                            <span className="booking__label-title">
                                Comment
                            </span>
                            <textarea
                                name="comment"
                                data-type="comment"
                                defaultValue={formState.comment}
                                className="booking__textarea"
                                id="comment"
                                maxLength={150}
                            />
                        </label>
                    </div>
                )}

                {step === BookingStep.PERSONAL_INFO && (
                    <div className="booking__form-part">
                        <label
                            className="booking__label card-title"
                            htmlFor="firstName"
                            aria-required
                        >
                            <span className="booking__label-title required">
                                First name
                            </span>
                            <input
                                name="firstName"
                                data-type="firstName"
                                defaultValue={formState.firstName}
                                className="booking__input "
                                id="firstName"
                                data-testid="firstName"
                                required
                            />
                        </label>

                        <label
                            className="booking__label card-title"
                            htmlFor="secondName"
                        >
                            <span className="booking__label-title required">
                                Second name
                            </span>
                            <input
                                name="secondName"
                                data-type="secondName"
                                defaultValue={formState.secondName}
                                className="booking__input "
                                id="secondName"
                                data-testid="secondName"
                                required
                            />
                        </label>

                        <label
                            className="booking__label card-title"
                            htmlFor="phone"
                        >
                            <span className="booking__label-title required">
                                Phone number
                            </span>
                            <input
                                name="phone"
                                data-type="phone"
                                defaultValue={formState.phone}
                                className="booking__input "
                                type="tel"
                                id="phone"
                                required
                                data-testid="phone"
                            />
                        </label>

                        <input
                            className={`button booking__submit  ${isInvalid ? "button--disabled" : ""}`}
                            type="submit"
                            value="Make Your reservation"
                            disabled={isInvalid}
                        />

                        <div className="booking__required-comment">
                            *Reqiured
                        </div>
                    </div>
                )}
            </form>
        </>
    )
}

export default BookingForm
