import React, { useState } from 'react'
import thirdtNumberImage from '../assets/Group 4024@2x.png';
import checkMark from '../assets/checkmark.png';
import astronaut from '../assets/Group 4034.png';
import editIcon from '../assets/Group 4026.png';
import { sendSMSMessage } from '../helpers/sendSMSMessage';
import { Footer } from '../components/Footer';

export const ThirdStepSMSValidation = ({ nextStep, prevStep, values }) => {

    const { phoneNumber } = values;
    const [showScreenSuccess, setshowScreenSuccess] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');

    const handleVerificationCode = (e) => {
        e.preventDefault();
        sendSMSMessage(phoneNumber).then((e) => {
            const code = verificationCode;
            if (code == null) return;
            e.confirm(code).then((result) => {
                document.querySelector('#informative').textContent = result.user.phoneNumber + ' Verificación exitosa ';
                setshowScreenSuccess(true);
                goToVerificationStep();
            }).catch((error) => {
                document.querySelector('#informative').textContent = error;
            })
        })
    }

    const goToVerificationStep = (e) => {
        setTimeout(() => {
            nextStep()
        }, 2000)
    }

    const handleInputChangue = (e) => {
        setVerificationCode(e.target.value);
    }

    return (
        <>
            {
                !showScreenSuccess
                    ?
                    (
                        <div>
                            <div className="container" >
                                <div className="d-flex justify-content-center align-items-start">
                                    <div>
                                        <button className="btn text-white" onClick={prevStep} > &#60; Regresar </button>
                                        <h1>
                                            <img className="number-step" src={thirdtNumberImage} alt="Step 3" />
                                            <span className="text-white"> CÓDIGO DE </span>
                                            <span className="text-atomic-orange">VERIFACIÓN</span>
                                        </h1>
                                        <p className="text-white my-4" >
                                            Te enviamos un SMS al número: <br />
                                            +52{phoneNumber} <img className="icon-size" src={editIcon} alt="edit number" />
                                        </p>

                                        <p className="text-white">Ingresa el código de verificación</p>
                                        <form className="form-row" >

                                            <div className="form-group col-md-8">
                                                <label className="text-white my-1" htmlFor="verificationCode">Código de verificación</label>
                                                <input type="text" className="form-control" name="verificationCode" onChange={handleInputChangue} autoComplete="nope" />
                                                <p className="text-danger"></p>
                                                <p className="text-white" id="informative"></p>
                                            </div>

                                            <span className='text-white'> ¿No recibiste el código ? </span>
                                            <button className="btn text-white ">
                                                <strong>Volver a enviar</strong>
                                            </button>
                                            <br />
                                            <button className="atomic-button mt-2" onClick={handleVerificationCode}> Verificar </button>

                                        </form>
                                        <div id="recaptcha-container"></div>
                                    </div>
                                    <div>
                                        <img className="image-dimension" src={astronaut} alt="astronauta" />
                                    </div>
                                </div>
                            </div >
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
                                Hemos validado el código
                            </p>
                        </div>
                    )
            }
        </>
    )
}
