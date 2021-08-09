let nameInput = document.getElementById('employeeName');
let nameInputError = document.getElementById('employeeNameError');

nameInput.oninput = handleNameInput;

function handleNameInput(e) {
    if(!(/^[A-Za-z.\s]+$/.test(e.target.value))){
        nameInputError.textContent = 'Please enter a valid name'
    }
    else{
        nameInputError.textContent = ""
    }
}

let addressInput = document.getElementById('address');
let addressInputError = document.getElementById('addressError');

addressInput.oninput = handleAddressInput;

function handleAddressInput(e) {
    if(!(/^[a-zA-Z0-9\s,'-/]*$/.test(e.target.value))){
        addressInputError.textContent = 'Please enter a valid Address'
    }
    else{
        addressInputError.textContent = ""
    }
}

let emailInput = document.getElementById('email');
let emailInputError = document.getElementById('emailError');

emailInput.oninput = handleEmailInput;

function handleEmailInput(e) {
    if(!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.target.value))){
        emailInputError.textContent = 'Please enter a valid email id'
    }
    else{
        emailInputError.textContent = ""
    }
}

let employeeIdInput = document.getElementById('employeeId');
let employeeIdInputError = document.getElementById('employeeIdError');

employeeIdInput.oninput = handleEmployeeIdInput;

function handleEmployeeIdInput(e) {
    if(!(/[A-Z]{1}-[0-9]{2,3}/.test(e.target.value))){
        employeeIdInputError.textContent = 'Please enter a valid employee id'
    }
    else{
        employeeIdInputError.textContent = ""
    }
}

let experienceInput = document.getElementById('experience');
let experienceInputError = document.getElementById('experienceError');

experienceInput.oninput = handleExperienceInput;

function handleExperienceInput(e) {
    if(!(/^[0-9][0-9]*$/.test(e.target.value))){
        experienceInputError.textContent = 'Please enter a valid number of experience'
    }
    else{
        experienceInputError.textContent = ""
    }
}

let phNumberInput = document.getElementById('phNumber');
let phNumberInputError = document.getElementById('phNumberError');

phNumberInput.oninput = handlePhNumberInput;

function handlePhNumberInput(e) {
    if(!(/^(\+91)?[0]?(91)?[789]\d{9}$/.test(e.target.value))){
        phNumberInputError.textContent = 'Please enter a valid phone number'
    }
    else{
        phNumberInputError.textContent = ""
    }
}

function checkFields(){
    let messageToDisplay = "";
    if(nameInput.value.length == 0){
        messageToDisplay += "Please fill the field name"
    }
    if(employeeIdInput.value.length == 0){
        messageToDisplay += ", employee Id"
    }
    if(experienceInput.value.length == 0){
        messageToDisplay += ", experience"
    }
    if(addressInput.value.length == 0){
        messageToDisplay += ", address"
    }
    if(emailInput.value.length == 0){
        messageToDisplay += ", email"
    }
    if(messageToDisplay.length > 0){
        alert(messageToDisplay);
    }
    else{
        nameInput.value = "";
        employeeIdInput.value ="";
        addressInput.value = "";
        emailInput = "";
        experienceInput = "";
    }
}
