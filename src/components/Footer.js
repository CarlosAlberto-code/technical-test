import React from 'react';
import linkedinLogo from '../assets/linkedin.png';
import twitterLogo from '../assets/twitter.png';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="row p-3">
                <div className="col-md-6">
                    Ⓒ2020 AtomicLabs. Todos los derechos reservados.
                </div>
                <div className="col-md-4">
                    <button className="btn btn-link text-white"> Aviso de privacidad </button>
                </div>
                <div className="col-md-2">
                    <img className="m-2" src={linkedinLogo} alt="linkedin logo" />
                    <img className="m-2" src={twitterLogo} alt="twitter logo" />
                </div>
            </div>
        </div>
    )
}
