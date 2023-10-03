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

//Form entry
function validateFirstName(first_name) {
    if (first_name.length > 1) {
        return true
    }
}
function validateLastName(last_name) {
    if (last_name.length > 1) {
        return true
    }
}
function validateEmail(email_address) {
    if (email_address !== "") {
        return true
    }
}
function validateBirthDate(birth_date) {
    
}
function validateTimesCome(times_come) {
    if (times_come.length > 0) {
        return true
    }
}
function validateLocation(check_boxes) {
    is_valid = false;
    Array.from(check_boxes).forEach(check_box =>  {
        if (check_box.type == "radio" && check_box.checked) {
            //return true
            is_valid = true
        }
    })
    return is_valid;
}
function validateTerms() {
    
}
// function checkIfFormIsValid() {

// }
function submitForm() {
    // formData.forEach((entry) => console.log(entry.getElementsByTagName("input")[0].value))
    errorMessage = ""
    if (!validateFirstName(document.getElementById("first").value)) {
        document.getElementById("first").parentElement.setAttribute("data-error-visible","true")
        errorMessage += " first"
    }
    if (!validateFirstName(document.getElementById("last").value)) {
        errorMessage += " last"
    }
    if (!validateTimesCome(document.getElementById("quantity").value)) {
        errorMessage += " quantity"
    }
    if (!validateEmail(document.getElementById("email").value)) {
        errorMessage += " email"
    }
    if (!validateLocation(document.getElementsByClassName("checkbox-input"))) {
        console.log(validateEmail(document.getElementById("email").value))
        errorMessage += " location"
    }
    // locationCheck = false
    // Array.from(checkBoxes).forEach(checkBox =>  {
    //         if (checkBox.type == "radio" && checkBox.checked) {
    //             locationCheck = true
    //         }
    //     })
    // if (!locationCheck) {
    //     errorMessage += " location"
    // }
    if (!document.getElementById("checkbox1").checked) {
        errorMessage += " terms"
        document.getElementById("checkbox1").setAttribute("data-error","Vous devez vérifier que vous acceptez les termes et conditions.")
    }
    if (errorMessage != "") {
        errorMessage = "Errors:" + errorMessage
        console.log(errorMessage)
    }
}
//Form Submit
document.getElementsByTagName("form")[0].addEventListener('submit', (e) => {
    e.preventDefault()
})
function testFunction() {
    console.log("boop")
}
document.getElementsByClassName("btn-submit")[0].addEventListener("click", submitForm)