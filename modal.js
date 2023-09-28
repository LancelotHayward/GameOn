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

//Form Submit
document.getElementsByTagName("form")[0].addEventListener('submit', (e) => {
    e.preventDefault()
})
//Form entry
function submitForm() {
    // formData.forEach((entry) => console.log(entry.getElementsByTagName("input")[0].value))
    errorMessage = ""
    if (document.getElementById("first").value.length < 2) {
        errorMessage += " first"
    }
    if (document.getElementById("last").value.length < 2) {
        errorMessage += " last"
    }
    if (document.getElementById("quantity").value === "") {
        errorMessage += " quantity"
    }
    if (document.getElementById("email").value === "") {
        errorMessage += " email"
    }
    checkBoxes = document.getElementsByClassName("checkbox-input")
    locationCheck = false
    Array.from(checkBoxes).forEach(checkBox =>  {
            if (checkBox.type == "radio" && checkBox.checked) {
                locationCheck = true
            }
        })
    if (!locationCheck) {
        errorMessage += " location"
    }
    if (!document.getElementById("checkbox1").checked) {
        errorMessage += " terms"
    }
    if (errorMessage != "") {
        errorMessage = "Errors:" + errorMessage
        return errorMessage
    }
}