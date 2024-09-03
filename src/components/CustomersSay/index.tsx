import React from "react"
import TestimonialItem from "./TestimonialItem"
import { TESTIMONIALS } from "./constants"
import "./styles.scss"

const CustomersSay = () => {
    return (
        <section className="testimonials ">
            <div className="testimonials__container container">
                <h2 className="testimonials__title sub-title">Testimonials</h2>
                <ul className="testimonials__list">
                    {TESTIMONIALS.map((testimonial) => (
                        <TestimonialItem
                            key={testimonial.name}
                            testimonial={testimonial}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default CustomersSay
