import React, { useCallback, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import LogoLemon from "./../../assets/images/Logo.svg"
import "./styles.scss"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const onMenuClick = useCallback(() => {
        setIsOpen((state) => !state)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <div className="header container">
            <Link className="header__link logo-link" to="/">
                <LogoLemon className="header__logo" />
            </Link>
            <div
                className={`header__menu ${isOpen ? "header__menu--open" : ""}`}
                onClick={onMenuClick}
            >
                <div className="header__menu-item"></div>
            </div>
            <nav
                className={`header__navbar ${isOpen ? "header__navbar--open" : ""}`}
            >
                <div className="header__menu-close" onClick={onMenuClick}></div>
                <ul className="header__list">
                    <li className="header__item">
                        <Link className="header__link link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__link link" to="/">
                            About
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__link link" to="/">
                            Menu
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__link link" to="/booking">
                            Reservations
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__link link" to="/">
                            Order Online
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__link link" to="/">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
