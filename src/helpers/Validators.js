
/**
 * 
 * @param {*} e 
 * @param {*} elementsToValidate 
 * @param {*} setelementsToValidate 
 * 
 * Validadores para el primer paso del formulario
 * refactorizar ya que hay mucho codigo repetido
 */

export const validateFirstName = (e, elementsToValidate, setelementsToValidate) => {
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

export const validateEmail = (e, elementsToValidate, setelementsToValidate) => {
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

export const validatePhoneNumber = (e, elementsToValidate, setelementsToValidate) => {
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