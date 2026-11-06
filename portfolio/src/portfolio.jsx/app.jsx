
import Home from "./home.jsx"
import About from "./about.jsx"
import Project from "./project.jsx"
import Contact from "./contact.jsx"
import Form from "./form.jsx"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function App() {
    return (
        <BrowserRouter>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">

                <div className="container">

                    <Link className="navbar-brand fw-bold text-danger" to="/"> Amira's Portfolio</Link>

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/project">
                                Project
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/form">
                                Form
                            </Link>
                        </li>

                    </ul>

                </div>

            </nav>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/project" element={<Project />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/form" element={<Form />} />

                <Route path="*" element={<h1>Not found!</h1>} />

            </Routes>

        </BrowserRouter>
    )
}
