function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn, .modal-closer")
const formData = document.querySelectorAll(".formData");
const submittedMessage = document.querySelectorAll(".bground")[1]
const form = document.getElementsByTagName("form")[0]

//List of form elements to validate, and their validator functions
const validators = [
    {id: "first", validator_function: validateFirstName},
    {id: "last", validator_function: validateLastName},
    {id: "email", validator_function: validateEmail},
    {id: "birthdate", validator_function: validateBirthDate},
    {id: "timescome", validator_function: validateTimesCome},
    {id: "terms", validator_function: validateTerms}
]

//Reset form
function resetForm() {
    form.reset()
    for (element of validators) {
        document.getElementById(element.id).parentElement.setAttribute("data-error-visible", "false")
    }
    document.getElementsByClassName("checkbox-input")[0].parentElement.setAttribute("data-error-visible", "false")
}

//Toggle Modal (function and event)
function toggleModal() {
    resetForm()
    modalbg.classList.toggle("display-block")
}
modalBtn.forEach((btn) => btn.addEventListener("click", toggleModal))

//Disable default form functionality and reset values
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

//Form validation
function validateFirstName(first_name) {
    return (first_name.value.length > 1)
}
function validateLastName(last_name) {
    return (last_name.value.length > 1)
}
function validateEmail(email) {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    return emailRegex.test(email.value)
}
function validateBirthDate(input_date) {
    birth_values = input_date.value.split("-")
    birth_date = new Date(birth_values[0], birth_values[1]-1,birth_values[2])
    now = new Date()
    difference = new Date(now.getTime() - birth_date.getTime()).getUTCFullYear() - 1970
    return (birth_date.value !== "" && difference > 15)
}
function validateTimesCome(times_come) {
    return (times_come.value.length > 0)
}
function validateLocation(check_boxes) {
    location_is_selected = false;
    Array.from(check_boxes).forEach(check_box =>  {
        if (check_box.type == "radio" && check_box.checked) {
            location_is_selected = true
        }
    })
    return location_is_selected;
}
function validateTerms(terms) {
    return (terms.checked)
}

/* Call every validator and return true if all of them return true.*/
function validateForm() {
    is_valid = true
    for (validator of validators) {
        element = document.getElementById(validator.id)
        element_is_valid = validator.validator_function(element)
        element.parentElement.setAttribute("data-error-visible", (!element_is_valid).toString())
        is_valid = is_valid && element_is_valid
    }
    //Unfortunately the location checkboxes can't share a simple ID.
    locations = document.getElementsByClassName("checkbox-input")
    location_is_valid = validateLocation(locations)
    locations[0].parentElement.setAttribute("data-error-visible", (!location_is_valid).toString())
    return is_valid && location_is_valid
}
//Submition message (function and event)
function toggleSubmittedMessage() {
    submittedMessage.classList.toggle("display-block")
}
submittedMessage.getElementsByClassName("close")[0].addEventListener("click", toggleSubmittedMessage)

//Submit form (function and event)
function submitForm() { //If the form is valid then hide the modal and show the submitted message.
    if (validateForm()) {
        toggleModal()
        toggleSubmittedMessage()
    }
}
document.getElementsByClassName("btn-submit")[0].addEventListener("click", submitForm)