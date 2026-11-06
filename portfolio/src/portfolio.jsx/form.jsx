
export default function Form() {
    return (
        <section className="form-section min-vh-100 py-5">

            <div className="container py-5">

                <div className="text-center mb-5">

                    <p className="text-danger fw-bold text-uppercase">
                        Get In Touch
                    </p>

                    <h1 className="display-4 fw-bold">
                        Send Me A <span className="text-danger">Message</span>
                    </h1>

                    <p className="text-secondary fs-5">
                        Feel free to send me a message.
                        I'll be happy to hear from you.
                    </p>

                </div>

                <div className="row justify-content-center">

                    <div className="col-lg-7 col-md-9">

                        <div className="card border-0 shadow-sm p-4">

                            <form>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        City
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your city"
                                        required
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Your Message
                                    </label>

                                    <textarea
                                        className="form-control"
                                        placeholder="Write your message..."
                                        rows="5"
                                        required
                                    ></textarea>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-danger rounded-pill px-5"
                                >
                                    Send Message
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
