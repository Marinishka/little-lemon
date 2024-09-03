import { SpecialI } from "./types"
const greekSalad = require("../../assets/images/greek_salad.jpg")
const bruchetta = require("../../assets/images/bruchetta.jpg")
const lemonDessert = require("../../assets/images/lemon_dessert.jpg")

export const SPECIALS: SpecialI[] = [
    {
        name: "Greek salad",
        price: "12.99",
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        img: greekSalad,
    },
    {
        name: "Bruchetta",
        price: "5.99",
        description:
            "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        img: bruchetta,
    },
    {
        name: "Lemon Dessert",
        price: "5.00",
        description:
            "This comes stright from grandma's recipe book, every last ingredient has been sourced and is as authetic as can be imagined.",
        img: lemonDessert,
    },
]
