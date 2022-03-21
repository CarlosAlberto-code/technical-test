import React, { useState } from 'react';
import { Header } from '../components/Header';
import { FirstStepForm } from './FirstStepForm';
import { SecondStepForm } from './SecondStepForm';
import { ThirdStepSMSValidation } from './ThirdStepSMSValidation';
import { FourStepTermsAndConditions } from './FourStepTermsAndConditions';
import { FinalStepSucces } from './FinalStepSucces';

import '../styles/AppStyles.css';
import { ProgressBarIndicator } from '../components/ProgressBarIndicator';

export const MainPage = () => {

    const [state, setState] = useState({
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        verificationCode: ""
    })

    const { step } = state;

    const prevStep = () => {
        setState({
            ...state,
            step: state.step - 1
        })
    }

    const nextStep = () => {
        setState({
            ...state,
            step: state.step + 1
        })
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="steps-background">
            <Header />

            {step <= 4 && <ProgressBarIndicator step={step} />}

            {(() => {
                switch (step) {
                    case 1:
                        return (
                            <FirstStepForm
                                nextStep={nextStep}
                                handleChange={handleChange}
                                values={state} />
                        );
                    case 2:
                        return (
                            <SecondStepForm
                                prevStep={prevStep}
                                nextStep={nextStep}
                                handleChange={handleChange}
                                values={state} />
                        );
                    case 3:
                        return (
                            <ThirdStepSMSValidation
                                prevStep={prevStep}
                                nextStep={nextStep}
                                handleChange={handleChange}
                                values={state} />
                        );
                    case 4:
                        return (
                            <FourStepTermsAndConditions
                                prevStep={prevStep}
                                nextStep={nextStep}
                                handleChange={handleChange}
                                values={state} />)
                    case 5:
                        return (
                            <FinalStepSucces />)
                    default:
                        return null
                }
            })()}

        </div>
    )
}
