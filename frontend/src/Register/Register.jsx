import { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import "./Register.css";
import LogoImage from "../Images/logoWojApp.png";
import { toast } from "react-toastify";

const Register = () => {
    let [nameValue, setNameValue] = useState("");
    let [lastNameValue, setLastNameValue] = useState("");
    let [roleValue, setRoleValue] = useState("");
    //let [statusValue, setStatusValue] = useState("");
    let [emailValue, setEmailValue] = useState("");
    let [passwordValue, setPasswordValue] = useState("");
    let [registerStatus, setRegisterStatus] = useState(false);

    let handleNameChange = (event) => {
        setNameValue(event.target.value);
    };
    let handleLastNameChange = (event) => {
        setLastNameValue(event.target.value);
    };
    let handleRoleChange = (event) => {
        setRoleValue(event.target.value);
    };
    /*let handleStatusChange = (event) => {
        setStatusValue(event.target.value);
    };*/
    let handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };
    let handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };
    let handleSubmit = async (event) => {
        event.preventDefault();

        const res = await fetch("/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userName: nameValue,
                userLastName: lastNameValue,
                userRole: roleValue,
                //userStatus: statusValue,
                userEmail: emailValue,
                userPassword: passwordValue,
            }),
        });
        const parsedRes = await res.json();
        if (parsedRes.registered) {
            toast.dark("Cuenta creada satisfactoriamente.");
            setRegisterStatus(true);
        } else {
            toast.error("Esa cuenta de correo ya existe. Por favor use un email diferente.");
        }
    };
    if (!registerStatus) {
        return (
            <main className="form-signin text-center">
                <Link to="/">
                    <img src={LogoImage} alt="WojApp Logo" width="300" height="100" />
                    <div className="row justify-content-center mb-4">
                        <div>Acerca de WojApp</div>
                    </div>
                </Link>
                <h1 className="h3 mb-3 fw-normal">Registro para WojApp!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating">
                        <input
                            type="name"
                            className="form-control"
                            placeholder="Nombre"
                            name="userName"
                            id="userName"
                            value={nameValue}
                            onChange={handleNameChange}
                            required
                        />
                        {/*<label htmlFor="userName">Nombre</label>*/}
                    </div>
                    <div className="form-floating">
                        <input
                            type="name"
                            className="form-control"
                            placeholder="Apellido"
                            name="userLastName"
                            id="userLastName"
                            value={lastNameValue}
                            onChange={handleLastNameChange}
                            required
                        />
                        {/*<label htmlFor="userLastName">Apellido</label>*/}
                    </div>
                    <div className="form-floating">
                        <select name="userRole" id="userRole">
                            <option value="admin">admin</option>
                            <option value="estudiante" selected>estudiante</option>
                            <option value="lider">lider</option>
                        </select>
                    </div>
                    <input
                        id="estado"
                        type="hidden"
                        value="pendiente"
                        name="estado"
                    />
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
                        Registrarse
                    </button>

                    <Link className="signup-link" to="/login">
                        <div className="row justify-content-center mb-4">
                            <div>Ya tienes una cuenta? Ingresa aquí!</div>
                        </div>
                    </Link>
                </form>
            </main>
        );
    } else {
        return <Redirect to="/login" />;
    }
};

export default Register;