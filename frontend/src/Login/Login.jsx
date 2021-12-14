import React from "react";
import { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import "./Login.css";
import LogoImage from "../Images/logoWojApp.png";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Login = (props) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    let handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };
    let handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };
    let handleSubmit = async (event) => {
        event.preventDefault();

        const res = await fetch("/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userEmail: emailValue,
                userPassword: passwordValue,
            }),
        });
        const parsedRes = await res.json();
        if (parsedRes.loginState) {
            toast.dark("Successful Login.");
            props.loginPressed();
        } else {
            toast.error("Incorrect email or password. Please try again.");
        }
    };
    if (!props.loggedIn) {
        return (
            <main className="form-signin text-center">
                <Link to="/">
                    <img src={LogoImage} alt="WojApp Logo" width="300" height="100" />
                    <div className="row justify-content-center mb-4">
                        <div>Acerca de WojApp</div>
                    </div>
                </Link>
                <h1 className="h3 mb-3 fw-normal">Por favor ingresar</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="userEmail"
                            id="userEmail"
                            value={emailValue}
                            onChange={handleEmailChange}
                            required
                        />
                        {/*<label htmlFor="userEmail">Email</label>*/}
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            id="userPassword"
                            name="userPassword"
                            value={passwordValue}
                            onChange={handlePasswordChange}
                            required
                        />
                        {/*<label htmlFor="userPassword">Contraseña</label>*/}
                    </div>

                    <button type="submit" className="w-100 btn btn-lg submitBtn">
                        Ingresar
                    </button>

                    {/*<Link className="signup-link" to="/register">*/}
                    <Link to="/register">
                        <div className="row justify-content-center mb-4">
                            <div>No tienes cuenta? Registrate en WojApp!</div>
                        </div>
                    </Link>
                </form>
            </main>
        );
    } else {
        return <Redirect to="/register" />;
    }
    // we lifted the redirect state up to the main App.js Router
    // } else {
    //   return <Redirect to="/dashboard" />;
    // }
};

Login.propTypes = {
    loginPressed: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
};

export default Login;