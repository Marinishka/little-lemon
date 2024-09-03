import React from "react"
import { Link } from "react-router-dom"
import { SpecialI } from "../types"
import "./styles.scss"

const SpecialItem = ({ special }: SpecialItemProps) => {
    return (
        <article className="special-item">
            <div className="special-item__img-container">
                <img
                    className="special-item__img"
                    src={special.img}
                    alt={special.name}
                    width="250px"
                    height="185px"
                />
            </div>

            <div className="special-item__content">
                <div>
                    <div className="special-item__head">
                        <h3 className="special-item__name">{special.name}</h3>
                        <div className="special-item__price specials-text ">
                            $ {special.price}
                        </div>
                    </div>
                    <p className="special-item__description p-text">
                        {special.description}
                    </p>
                </div>

                <Link className="special-item__link specials-text " to={"/"}>
                    Order a delivery
                </Link>
            </div>
        </article>
    )
}

export default SpecialItem

interface SpecialItemProps {
    special: SpecialI
}
