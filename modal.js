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
const modalBtn = document.querySelectorAll(".modal-btn, .close"); //my mod
const formData = document.querySelectorAll(".formData");

//My code
// Toggle Modal Function
function toggleModal() {
    modalbg.classList.toggle("display-block")
}

//Toggle Modal Event
modalBtn.forEach((btn) => btn.addEventListener("click", toggleModal))

//Form validation
function validateFirstName(first_name) {
    return (first_name.value.length > 1)
}
function validateLastName(last_name) {
    return (last_name.value.length > 1)
}
function validateEmail(email_address) {
    return (email_address.value !== "")
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
    location_is_selected = validateLocation(document.getElementsByClassName("checkbox-input"))
    return is_valid && location_is_selected
}
//Form submition
function submitForm() {
    if (validateForm()) {
        console.log("Yip")
    }
}
document.getElementsByTagName("form")[0].addEventListener('submit', (e) => {
    e.preventDefault()
})
document.getElementsByClassName("btn-submit")[0].addEventListener("click", submitForm)