import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a
                        href=""
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#3b5998' }}
                        role="button"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                        href=""
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#55acee' }}
                        role="button"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a
                        href=""
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#dd4b39' }}
                        role="button"
                    >
                        <i className="fab fa-google"></i>
                    </a>

                    <a
                        href=""
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }}
                        role="button"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        href=""
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#0082ca' }}
                        role="button"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                        href=""
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#333333' }}
                        role="button"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <h6>Proyecto: Desarrollo de un front-end utilizando React</h6>
            </div>
        </footer>
    );
};

export default Footer;
