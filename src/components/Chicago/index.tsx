import React from "react"
import "./styles.scss"
const adrianAndMarioA = require("../../assets/images/Mario_and_Adrian_A.jpg")
const adrianAndMarioB = require("../../assets/images/Mario_and_Adrian_b.jpg")

const Chicago = () => {
    return (
        <section className="chicago ">
            <div className="chicago__container container">
                <div className="chicago__about">
                    <h2 className="chicago__title display-title">
                        Little Lemon
                    </h2>
                    <h3 className="chicago__sub-title sub-title">Chicago</h3>
                    <p className="chicago__text">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                    </p>
                    <p className="chicago__text">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                    </p>
                </div>
                <div className="chicago__imgs">
                    <img
                        className="chicago__img chicago__img--first"
                        src={adrianAndMarioB}
                        width="272px"
                        height="338px"
                        aria-label="Mario and Adrian"
                    />
                    <img
                        className="chicago__img chicago__img--second"
                        src={adrianAndMarioA}
                        width="272px"
                        height="338px"
                        aria-label="Mario and Adrian"
                    />
                </div>
            </div>
        </section>
    )
}

export default Chicago
