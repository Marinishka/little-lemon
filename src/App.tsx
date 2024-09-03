import React from "react"
import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"

import "./assets/styles/main.scss"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Navigation />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
