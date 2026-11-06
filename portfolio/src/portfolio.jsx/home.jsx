
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <section className="home min-vh-100 d-flex align-items-center">

            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-8 col-md-10">

                        <p className="welcome text-uppercase fw-bold mb-3">
                            Welcome to my portfolio
                        </p>

                        <h1 className="display-2 fw-bold text-dark">
                            Hi, I'm <span className="text-danger">Amira</span>
                        </h1>

                        <h2 className="fw-semibold mt-3">
                            Full Stack Web Developer
                        </h2>

                        <p className="description text-secondary mt-4 fs-5">
                            I'm a passionate web developer who loves
                            creating modern and interactive websites.
                            I enjoy learning new technologies and
                            building creative projects.
                        </p>

                        <div className="home-buttons d-flex flex-wrap gap-3 mt-4">

                            <Link
                                to="/project"
                                className="btn btn-danger btn-lg rounded-pill px-4"
                            >
                                View My Projects
                            </Link>

                            <Link
                                to="/contact"
                                className="btn btn-outline-dark btn-lg rounded-pill px-4"
                            >
                                Contact Me
                            </Link>

                        </div>

                        <div className="mt-5">
                            <p className="fw-semibold">
                                Technologies I work with:
                            </p>

                            <div className="d-flex flex-wrap gap-2">

                                <span className="badge bg-dark p-2">HTML</span>
                                <span className="badge bg-dark p-2">CSS</span>
                                <span className="badge bg-dark p-2">JavaScript</span>
                                <span className="badge bg-dark p-2">Bootstrap</span>
                                <span className="badge bg-dark p-2">React</span>
                                <span className="badge bg-dark p-2">Python</span>
                                <span className="badge bg-dark p-2">PHP</span>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}
