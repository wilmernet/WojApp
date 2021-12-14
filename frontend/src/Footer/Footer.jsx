import "./Footer.css";

function Footer() {
    return (
        <footer className="text-center text-lg-start">
            <div className="mt-3">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <p className="text-uppercase colorDesign footer-p">WojApp</p>
                        <p> Construida por:
                            Oscar Lancheros
                            Wilmer Patiño
                            Johanna Campaz
                            Santiago Mery
                            Steven Hernandez
                        </p>
                    </div>
                    <div className="col-lg3 col-md-6 mb-4 mb-md-0">
                        <p className="text-uppercase colorDesign footer-p">Links</p>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a
                                    href="https://lms.misiontic2022udea.com/"
                                    className="text-dark"
                                >
                                    Website MinTic2022UdeA
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/wilmernet/WojApp"
                                    className="text-dark"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;