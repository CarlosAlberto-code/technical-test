import React, { useEffect, useState } from 'react';
import firstNumberImage from '../assets/Group 4015@2x.png';
import astronaut from '../assets/Group 4033.png';
import { Footer } from '../components/Footer';

import {validateFirstName, validateEmail} from '../helpers/Validators';

export const FirstStepForm = ({ nextStep, handleChange, values }) => {

    const { firstName, lastName, email } = values;
    const [elementsToValidate, setelementsToValidate] = useState({
        firstNameValid: false,
        emailValid: false
    })

    useEffect(() => {
        setelementsToValidate({
            firstNameValid: firstName.length > 0,
            emailValid: email.length > 0
        })
    }, []);

    const { firstNameValid, emailValid } = elementsToValidate;
    const isValidForm = firstNameValid && emailValid;

    const validateInputFirstName = (e) => {
        validateFirstName(e, elementsToValidate, setelementsToValidate);
    }

    const validateInputEmail = (e) => {
        validateEmail(e, elementsToValidate, setelementsToValidate);
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
                                <input type="text" className="form-control" name="firstName" onChange={handleChange} onKeyUp={validateInputFirstName} value={firstName} autoComplete="nope" />
                                <p className="text-danger"></p>
                            </div>
                            <div className="form-group col-md-8">
                                <label className="text-white my-1" htmlFor="lastName">Apellidos</label>
                                <input type="text" className="form-control" name="lastName" onChange={handleChange} value={lastName} autoComplete="nope" />
                                <p className="text-danger"></p>
                            </div>
                            <div className="form-group col-md-8">
                                <label className="text-white my-1" htmlFor="email">Correo</label>
                                <input type="text" className="form-control" name="email" onChange={handleChange} onKeyUp={validateInputEmail} value={email} autoComplete="nope" />
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