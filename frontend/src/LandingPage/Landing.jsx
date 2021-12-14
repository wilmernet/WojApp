import "./Landing.css";
//import "../Navbar/Navbar.css"
import Footer from "../Footer/Footer.jsx";
import LogoImage from "../Images/logoWojApp.png";
import CheckList from "../Images/checkListConv.png";
import DataAnalysis from "../Images/dataAnalysisConv.png";
import ProjectAdvance from "../Images/projectAdvanceConv.png";
import TeamGroup from "../Images/teamGroupConv.png";
import TeamWork from "../Images/teamWorkConv.png";
import { Link } from "react-router-dom";

const Landing = () =>{
    return (
        <div className="pageBody">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <img
                        src={LogoImage}
                        alt="JowApp Logo"
                        style={{ height: "40px", width: "120px" }}
                    />
                    <h3 className="navbar-nav linkText" href="/">
                        WojApp
                    </h3>
                    <button
                        className="navbar-toggler button-color"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                        >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/login">
                                    Ingresar
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">
                                    Registrarse
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="page-header gradient">
                <div className="container pt-3">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-5">
                            <h1>Bienvenido a WojApp</h1>
                            <p>Una aplicación que le permite administrar sus proyectos.</p>
                            <Link
                                type="button"
                                className="btn btn-outline-info btn-lg signUpBtn"
                                to="/register"
                            >
                                Registrarse
                            </Link>
                        </div>
                        <div className="col-md-5">
                            <img
                                src={CheckList}
                                alt="Pareja revisando un checklis"
                            />
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,138.7C672,128,768,64,864,53.3C960,43,1056,85,1152,90.7C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </header>
            <section className="wojapp">
                <div className="container text-center" role="main">
                    <div className="row g-5 align-items-center justify-content-center">
                        <div className="col-md-3">
                            <img
                                src={DataAnalysis}
                                alt="Gráfica de data análisis"
                                className="img-fluid pic1"
                            />
                        </div>
                        <div className="col-md-4">
                            <img
                                src={ProjectAdvance}
                                alt="Equipo de trabajo con progreso de proyecto"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-4">
                            <img
                            src={TeamGroup}
                            alt="Equipo de trabajo revisando proyecto"
                            className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature gradient">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,64L48,58.7C96,53,192,43,288,64C384,85,480,139,576,181.3C672,224,768,256,864,229.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg>
                <div className="container" role="complementary">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-5">
                            <img
                                src={TeamWork}
                                alt="Trabajo en equipo"
                            />
                        </div>
                        <div className="col-mdd-5">
                            <h2 className="my-3">Qué hace JowApp?</h2>
                            <p className="my-4">
                                JowApp es una aplicación de gestión de proyectos.
                                Permite administrar y seguir el avance de
                                todos sus proyectos en un solo lugar.
                            </p>
                            <ul>
                                <li> Crea un proyecto.</li>
                                <li> Administra su avance.</li>
                                <li> Finaliza tus proyectos.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-3">
                <Footer />
            </div>
        </div>
    );
};

export default Landing;
