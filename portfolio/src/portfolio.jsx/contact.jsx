
export default function Contact() {
    return (
        <section className="contact min-vh-100 py-5">

            <div className="container py-5">

                <div className="text-center mb-5">

                    <p className="text-danger fw-bold text-uppercase">
                        Let's Connect
                    </p>

                    <h1 className="display-4 fw-bold">
                        Contact <span className="text-danger">Me</span>
                    </h1>

                    <p className="text-secondary fs-5 mt-3">
                        Have a question or a project in mind?
                        Feel free to contact me.
                    </p>

                </div>

                <div className="row justify-content-center g-4">

                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 shadow-sm border-0 p-4 text-center">

                            <div className="card-body">

                                <h3 className="h4 fw-bold mb-3">
                                    Email
                                </h3>

                                <p className="text-secondary">
                                    Send me an email
                                </p>

                                <a
                                    href="mailto:amiraouiddad17@gmail.com"
                                    className="text-danger text-decoration-none"
                                >
                                    amiraouiddad17@gmail.com
                                </a>

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 shadow-sm border-0 p-4 text-center">

                            <div className="card-body">

                                <h3 className="h4 fw-bold mb-3">
                                    Phone
                                </h3>

                                <p className="text-secondary">
                                    Call me
                                </p>

                                <a
                                    href="tel:+212703914180"
                                    className="text-danger text-decoration-none"
                                >
                                    +212 70 3914 180
                                </a>

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 shadow-sm border-0 p-4 text-center">

                            <div className="card-body">

                                <h3 className="h4 fw-bold mb-3">
                                    GitHub
                                </h3>

                                <p className="text-secondary">
                                    Discover my projects
                                </p>

                                <a
                                    href="https://github.com/Amiraa-18"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline-danger rounded-pill px-4"
                                >
                                    Visit My GitHub
                                </a>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}
