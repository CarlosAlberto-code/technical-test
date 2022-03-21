import React from 'react';
import fourNumberImage from '../assets/Group 4025@2x.png';
import astronaut from '../assets/Group 4038.png';
import { ShowModalTermsAndConditions } from '../components/ShowModalTermsAndConditions';

export const FourStepTermsAndConditions = ({ nextStep, handleChange, values }) => {

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-start">
                <div>
                    <h1>
                        <img className="number-step" src={fourNumberImage} alt="Step 4" />
                        <span className="text-white"> TÉRMINOS Y </span>
                        <span className="text-atomic-orange">CONDICIONES</span>
                    </h1>
                    <p className="text-white my-4">Por favor revisa nuestros términos y condiciones para este servicio:</p>
                    <ShowModalTermsAndConditions />
                    <form className="form-row mx-2">
                        <input type="checkbox" className="form-check-input " name="acceptTerms" required/>
                        <label className="form-check-label custom-checkbox text-white" htmlFor="acceptTerms">Acepto los Términos y condiciones</label>
                    </form>
                </div>
                <div>
                    <img className="image-dimension" src={astronaut} alt="astronauta" />
                </div>
            </div>
        </div>
    )
}
