import React from 'react';
import astronaut from '../assets/Group 4039.png';
import { Footer } from '../components/Footer';

export const FinalStepSucces = () => {
    return (
        <>
            <div className="container" >
                <div className="d-flex justify-content-center align-items-start">
                    <div className="mt-5">
                        <h1>
                            <span className="text-white"> TUS DATOS </span><br />
                            <span className="text-atomic-orange">HAN SIDO ENVIADOS</span><br />
                            <span className="text-atomic-orange">CON ÉXITO</span>
                        </h1>
                        <p className="lead text-white">
                            En breve recibirás un correo de confirmación <br />
                            por parte del equipo de AtomicLabs.
                        </p>
                        <p className="text-white">
                            Recuerda revisar tu bandeja de SPAM <br />
                            ¡Esperamos verte pronto!
                        </p>
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
