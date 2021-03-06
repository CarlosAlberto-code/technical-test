import React, { useEffect, useState } from 'react';
import astronaut from '../assets/Group 4034.png';
import SecondNumberImage from '../assets/Group 4023@2x.png';
import checkMark from '../assets/checkmark.png';
import { Footer } from '../components/Footer';

import {validatePhoneNumber} from '../helpers/Validators';

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

    const validateInputPhoneNumber = (e) =>{
        validatePhoneNumber(e, elementsToValidate, setelementsToValidate);
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
                                            Necesitamos validar tu n??mero para continuar <br />
                                            Ingresa tu n??mero a 10 d??gitos y te enviaremos un c??digo SMS.
                                        </p>
                                        <form className="form-row">
                                            <div className="form-group col-md-8">
                                                <label className="text-white my-1" htmlFor="phoneNumber">N??mero de celular</label>
                                                <input type="text" className="form-control" name="phoneNumber" maxLength="10" onChange={handleChange} onKeyUp={validateInputPhoneNumber} value={phoneNumber} autoComplete="nope" />
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
                                Te hemos enviado el c??digo <br />
                                al n??mero que nos proporcionaste.
                            </p>
                        </div>
                    )
            }

        </>

    )
}
