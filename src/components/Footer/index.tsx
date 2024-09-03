import React from "react"
import { Link } from "react-router-dom"
import "./styles.scss"
const logo = require("./../../assets/images/logo_footer2.png")

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <Link className="logo-link" to="/">
                    <img
                        className="footer__logo"
                        src={logo}
                        height="279px"
                        width="162px"
                        aria-label="Little Lemon logo"
                    />
                </Link>

                <div className="footer__sections">
                    <section className="footer__section">
                        <h2 className="footer__section-title">Navigation</h2>
                        <nav className="footer__nav">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <Link className="footer__link link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link link" to="/">
                                        About
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link link" to="/">
                                        Menu
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link link" to="/booking">
                                        Reservations
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link link" to="/">
                                        Order online
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link link" to="/">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </section>
                    <section className="footer__section">
                        <h2 className="footer__section-title">Contact</h2>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <address className="footer__address">
                                    600 E Grand Ave, Chicago, IL 60611, USA
                                </address>
                            </li>
                            <li className="footer__item">
                                <a
                                    className="footer__link link"
                                    href="tel:+1234567890"
                                >
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    className="footer__link link"
                                    href="mailto:info@example.com"
                                >
                                    info@example.com
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer__section">
                        <h2 className="footer__section-title">Social media</h2>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a className="footer__link link" href="/">
                                    Instagram
                                </a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link link" href="/">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </footer>
    )
}

export default Footer
