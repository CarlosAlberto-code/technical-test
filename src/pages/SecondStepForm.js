import React, { useEffect, useState } from 'react';
import astronaut from '../assets/Group 4034.png';
import SecondNumberImage from '../assets/Group 4023@2x.png';
import checkMark from '../assets/checkmark.png';
import { Footer } from '../components/Footer';

export const SecondStepForm = ({ prevStep, nextStep, handleChange, values }) => {

    const { phoneNumber } = values;
    const [showScreen, setshowScreen] = useState(false);
    const [elementsToValidate, setelementsToValidate] = useState({
        phoneNumberValid: false
    })

    // When the user go back to enable the button
    useEffect(() => {
        setelementsToValidate({
            phoneNumberValid: phoneNumber != ''
        })
    }, []);

    const { phoneNumberValid } = elementsToValidate;

    const validatePhoneNumber = (e) => {
        const element = e.target;
        const { value } = element;
        const pattern = new RegExp(/^(\d{10})/i);
        if (!pattern.test(value)) {
            element.focus();
            element.nextElementSibling.innerHTML = 'Introduce un número de teléfono válido';
            setelementsToValidate({
                phoneNumberValid: false
            })
        } else {
            element.nextElementSibling.innerHTML = '';
            setelementsToValidate({
                phoneNumberValid: true
            })
        }
    }

    const goToVerificationStep = (e) => {
        setshowScreen(true && phoneNumberValid);
        setTimeout(() => {
            nextStep()
        }, 2000)
    }

    return (
        <>
            {
                !showScreen
                    ?
                    (
                        <div>
                            <div className="container">
                                <div className="d-flex justify-content-center align-items-start">
                                    <div>
                                        <button className="btn text-white" onClick={prevStep} > &#60; Regresar </button>
                                        <h1>
                                            <img className="number-step" src={SecondNumberImage} alt="Step 2" />
                                            <span className="text-white"> VALIDA </span>
                                            <span className="text-atomic-orange">TU CELULAR</span>
                                        </h1>
                                        <p className="text-white my-2">
                                            Necesitamos validar tu número para continuar <br />
                                            Ingresa tu número a 10 dígitos y te enviaremos un código SMS.
                                        </p>
                                        <form className="form-row">
                                            <div className="form-group col-md-8">
                                                <label className="text-white my-1" htmlFor="phoneNumber">Número de celular</label>
                                                <input type="text" className="form-control" name="phoneNumber" maxLength="10" onChange={handleChange} onKeyUp={validatePhoneNumber} value={phoneNumber} autoComplete="nope" />
                                                <p className="text-danger"></p>
                                            </div>
                                            <button className="atomic-button mt-2" onClick={goToVerificationStep} disabled={!phoneNumberValid} >Enviar</button>
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
                        </div>
                    )
                    :
                    (
                        <div className="text-center">
                            <img className="number-step m-3" src={checkMark} alt="Correcto" />
                            <p className="text-white">
                                Te hemos enviado el código <br />
                                al número que nos proporcionaste.
                            </p>
                        </div>
                    )
            }

        </>

    )
}
