
export default function About() {
    return (
        <section className="about min-vh-100 py-5">

            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-9">

                        <p className="text-danger fw-bold text-uppercase">
                            Get to know me
                        </p>

                        <h1 className="display-4 fw-bold mb-4">
                            About <span className="text-danger">Me</span>
                        </h1>

                        <h2 className="h3 fw-semibold mb-4">
                            I'm Amira, a Full Stack Web Developer
                        </h2>

                        <p className="text-secondary fs-5">
                            I'm a passionate web development student
                            specializing in Full Stack Development.
                            I enjoy creating modern, responsive and
                            user-friendly websites.
                        </p>

                        <p className="text-secondary fs-5">
                            I'm always motivated to learn new technologies,
                            improve my programming skills and turn creative
                            ideas into real projects.
                        </p>

                        <div className="mt-5">

                            <h3 className="fw-bold mb-3">
                                My Education
                            </h3>

                            <div className="card border-0 shadow-sm p-4 mb-4">
                                <h5 className="fw-bold">
                                    Specialized Technician
                                </h5>

                                <p className="text-secondary mb-0">
                                    Digital Development - Full Stack Development
                                </p>
                            </div>

                        </div>

                        <div className="mt-4">

                            <h3 className="fw-bold mb-3">
                                My Interests
                            </h3>

                            <div className="d-flex flex-wrap gap-2">

                                <span className="badge bg-dark p-2">
                                    Web Development
                                </span>

                                <span className="badge bg-dark p-2">
                                    UI Design
                                </span>

                                <span className="badge bg-dark p-2">
                                    Programming
                                </span>

                                <span className="badge bg-dark p-2">
                                    New Technologies
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
