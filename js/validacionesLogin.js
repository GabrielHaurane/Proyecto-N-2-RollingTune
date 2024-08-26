export function msjInvalidInput(msj, childNode, createMsj = true) {
    const parentNode = childNode.parentNode;

    // Verifica si el div del mensaje ya existe, si existe lo elimina
    const lastChildOfParentNode = parentNode.lastElementChild;
    if (lastChildOfParentNode && lastChildOfParentNode.classList.contains("invalid-feedback")) {
        lastChildOfParentNode.remove();
    }

    // Crea el div con el mensaje
    if (createMsj) {
        const invalidDiv = document.createElement("div");
        const contentInvalid = document.createTextNode(msj);
        invalidDiv.appendChild(contentInvalid);
        invalidDiv.className = "invalid-feedback";
        parentNode.append(invalidDiv);
    }
}

export function validateEmptyField(inputElement) {
    if (inputElement.value.trim() === '') {
        msjInvalidInput('Este campo no puede estar vacío', inputElement);
        return false;
    }
    return true;
}

export function validateMinLength(inputElement, minLength) {
    if (inputElement.value.length < minLength) {
        msjInvalidInput(`Este campo debe tener al menos ${minLength} caracteres`, inputElement);
        return false;
    }
    return true;
}

export function validateUsernameFormat(inputElement) {
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(inputElement.value)) {
        msjInvalidInput('El nombre de usuario solo puede contener letras y números', inputElement);
        return false;
    }
    return true;
}

export function validatePasswordSecurity(inputElement) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!regex.test(inputElement.value)) {
        msjInvalidInput('La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial', inputElement);
        return false;
    }
    return true;
}

export function validatePasswordMatch(passwordElement, confirmPasswordElement) {
    if (passwordElement.value !== confirmPasswordElement.value) {
        msjInvalidInput('Las contraseñas no coinciden', confirmPasswordElement);
        return false;
    }
    return true;
}

export function validateLoginForm() {
    const usernameElement = document.getElementById('username');
    const passwordElement = document.getElementById('password');
    let isValid = true;

    // Limpiar mensajes previos
    msjInvalidInput('', usernameElement, false);
    msjInvalidInput('', passwordElement, false);

    // Validaciones
    if (!validateEmptyField(usernameElement)) isValid = false;
    if (!validateMinLength(usernameElement, 5)) isValid = false;
    if (!validateUsernameFormat(usernameElement)) isValid = false;

    if (!validateEmptyField(passwordElement)) isValid = false;
    if (!validatePasswordSecurity(passwordElement)) isValid = false;

    return isValid;
}