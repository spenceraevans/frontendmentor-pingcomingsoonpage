const form = document.getElementById("form");
const email = document.getElementById("email");
const button = document.querySelector(".button");
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const text = document.querySelector(".validity");

function validateEmail() {
    if(pattern.test(email.value)) {
        alert("Thank you for subscribing");
        email.classList.remove("invalid");
        email.value = "";
        text.innerHTML = "";
    } else {
        text.innerHTML = "Please provide a valid email address";
        email.classList.add("invalid");
    }
}

button.addEventListener("click", validateEmail);