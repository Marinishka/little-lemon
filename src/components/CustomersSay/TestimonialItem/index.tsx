import React, { useMemo } from "react"
import { Testimonial } from "../types"

import "./styles.scss"
const star = require("../../../assets/images/star.png")

const TestimonialItem = ({ testimonial }: TestimonialItemProps) => {
    const raiting = useMemo(
        () =>
            Array(testimonial?.raiting)
                .fill(null)
                .map((_, i) => (
                    <img
                        className="testimonial-item__star"
                        key={i}
                        src={star}
                        alt="star"
                        width="20px"
                        height="20px"
                    />
                )),
        [testimonial?.raiting],
    )
    return (
        <li className="testimonial-item">
            <div className="testimonial-item__raiting">{raiting}</div>
            <div className="testimonial-item__author">
                <img
                    className="testimonial-item__avatar"
                    src={testimonial?.photo}
                    alt={testimonial?.name}
                    width="47px"
                    height="47px"
                />
                <span className="testimonial-item__name">
                    {testimonial?.name}
                </span>
            </div>
            <div className="testimonial-item__comment-container">
                <div className="testimonial-item__comment">
                    {testimonial?.comment}
                </div>
            </div>
        </li>
    )
}

export default TestimonialItem

interface TestimonialItemProps {
    testimonial: Testimonial
}
