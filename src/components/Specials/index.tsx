import React from "react"
import { Link } from "react-router-dom"
import { SPECIALS } from "./constants"
import SpecialItem from "./SpecialItem"
import "./styles.scss"

const Specials = () => {
    return (
        <section className="specials container">
            <div className="specials__top">
                <h2 className="specials__header display-title">This week specials!</h2>
                <Link className="specials__link button" to={"/"}>
                    Online menu
                </Link>
            </div>
            <ul className="specials__list">
                {SPECIALS.map((it) => {
                    return (
                        <li className="specials__item" key={it.name}>
                            <SpecialItem special={it} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Specials
