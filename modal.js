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

//Toggle Modal (function and event)
function toggleModal() {
    modalbg.classList.toggle("display-block")
}
modalBtn.forEach((btn) => btn.addEventListener("click", toggleModal))

//Disable default form functionality and reset values
form.addEventListener('submit', (e) => {
    e.preventDefault()
})
form.reset()

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
function validateBirthDate(birth_date) {
    return (birth_date.value !== "")
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
    check_boxes[0].parentElement.setAttribute("data-error-visible", (!location_is_selected).toString())
    return location_is_selected;
}
function validateTerms(terms) {
    return (terms.checked)
}

/* Contains a list of IDs and the function names, to call every validator and return true if all of themr return true.*/
function validateForm() {
    is_valid = true
    validators = [
        {id: "first", validator_function: validateFirstName},
        {id: "last", validator_function: validateLastName},
        {id: "email", validator_function: validateEmail},
        {id: "birthdate", validator_function: validateBirthDate},
        {id: "timescome", validator_function: validateTimesCome},
        {id: "terms", validator_function: validateTerms}
    ]
    for (validator of validators) {
        element = document.getElementById(validator.id)
        element_is_valid = validator.validator_function(element)
        element.parentElement.setAttribute("data-error-visible", (!element_is_valid).toString())
        is_valid = is_valid && element_is_valid
    }
    return is_valid && validateLocation(document.getElementsByClassName("checkbox-input")) //Unfortunately the location checkboxes can't share a simple ID.
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