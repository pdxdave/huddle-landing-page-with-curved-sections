const form = document.querySelector("#form");
const btn = document.querySelector(".form-btn");
const err_msg = document.querySelector(".form-error");
const input_email = document.querySelector(".form-input");

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input_email.value === "" || !input_email.value.match(pattern)){
        err_msg.classList.add("show-error");
    } else {
        input_email.value = "";
        err_msg.classList.remove("show-error");
    }
})