import React, { useState } from 'react';
import firstNumberImage from '../assets/Group 4015@2x.png';
import astronaut from '../assets/Group 4033.png';
import { Footer } from '../components/Footer';

export const FirstStepForm = ({ nextStep, handleChange, values }) => {

    const { firstName, lastName, email, step } = values;
    const [elementsToValidate, setelementsToValidate] = useState({
        firstNameValid: false,
        emailValid: false
    })

    const { firstNameValid, emailValid } = elementsToValidate;
    const isValidForm = firstNameValid && emailValid;

    const validateFirstName = (e) => {
        const element = e.target;
        const { value } = element;
        if (value.trim().length < 5) {
            element.focus();
            element.nextElementSibling.innerHTML = 'El nombre deberá tener mínimo 5 caracteres';
            setelementsToValidate({
                ...elementsToValidate,
                firstNameValid: false
            })
        } else {
            element.nextElementSibling.innerHTML = '';
            setelementsToValidate({
                ...elementsToValidate,
                firstNameValid: true
            })
        }
    }

    const validateEmail = (e) => {
        const element = e.target;
        const { value } = element;
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(value)) {
            element.focus();
            element.nextElementSibling.innerHTML = 'El email tiene un formato incorrecto';
            setelementsToValidate({
                ...elementsToValidate,
                emailValid: false
            })
        } else {
            element.nextElementSibling.innerHTML = '';
            setelementsToValidate({
                ...elementsToValidate,
                emailValid: true
            })
        }
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center align-items-start">
                    <div>
                        <h1>
                            <img className="number-step" src={firstNumberImage} alt="Step 1" />
                            <span className="text-white"> TE QUEREMOS </span>
                            <span className="text-atomic-orange">CONOCER</span>
                        </h1>
                        <p className="text-white my-4">Queremos saber que eres tú, por favor ingresa los siguientes datos:</p>
                        <form className="form-row" autoComplete="new-password">
                            <div className="form-group col-md-8">
                                <label className="text-white my-1" htmlFor="firstName">Nombre(s)</label>
                                <input type="text" className="form-control" name="firstName" onChange={handleChange} onKeyUp={validateFirstName} value={firstName} autoComplete="nope" />
                                <p className="text-danger"></p>
                            </div>
                            <div className="form-group col-md-8">
                                <label className="text-white my-1" htmlFor="lastName">Apellidos</label>
                                <input type="text" className="form-control" name="lastName" onChange={handleChange} value={lastName} autoComplete="nope" />
                                <p className="text-danger"></p>
                            </div>
                            <div className="form-group col-md-8">
                                <label className="text-white my-1" htmlFor="email">Correo</label>
                                <input type="text" className="form-control" name="email" onChange={handleChange} onKeyUp={validateEmail} value={email} autoComplete="nope" />
                                <p className="text-danger"></p>
                            </div>
                            <button className="atomic-button mt-2" onClick={nextStep} disabled={!isValidForm} > Enviar </button>
                        </form>
                    </div>
                    <div>
                        <img className="image-dimension" src={astronaut} alt="astronauta" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="d-flex">
                    <div className="align-self-center">
                        <Footer />
                    </div>
                </div>
            </div>
        </>

    )
}