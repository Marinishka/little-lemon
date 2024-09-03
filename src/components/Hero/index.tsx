import React from "react"
import { Link } from "react-router-dom"
import "./styles.scss"

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__main-content">
                    <h1 className="hero__header display-title">Little Lemon</h1>
                    <h2 className="hero__subtitle sub-title">Chicago</h2>
                    <p className="hero__text lead-text">
                        We are a family owned Mediterranean restoraunt, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <Link className="hero__link button" to="/booking">
                        Reserve a Table
                    </Link>
                </div>

                <img
                    src={require("./../../assets/images/restauranfood.jpg")}
                    className="hero__img"
                    width="300"
                    height="300"
                    alt="Assorted snacks on toasted bread"
                />
            </div>
        </section>
    )
}

export default Hero
