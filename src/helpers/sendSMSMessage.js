import { firebaseApp } from '../server/firebase-config';

// +52 Mexico country code
export const sendSMSMessage = ( phoneNumber, countryCode = 52 ) => {

    const recaptcha = new firebaseApp.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible'
    });
    const number = `+${countryCode}${phoneNumber}`;
    return firebaseApp.auth().signInWithPhoneNumber(number, recaptcha);
}