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
function submitForm() {
    formData.forEach((entry) => console.log(entry.getElementsByTagName("input")[0].value))
}