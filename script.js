// function getFormCheck() {
//     const password = document.getElementById("password");
//     const confirmPassword = document.getElementById("confirmPassword");
//     validatePasswords(password, confirmPassword);
//     let valid =  0;

//     const firstName = document.getElementById("firstName");
//     const lastName = document.getElementById("lastName");
//     let regex = /^[a-zA-Z0-9_]+$/;
//     if (regex.test(firstName.value)) {
//         valid += 1;
//         firstName.classList.remove("inputInvalid");
//         firstName.classList.add("inputValid");
//     } else {
//         firstName.classList.remove("inputValid");
//         firstName.classList.add("inputInvalid");
//     };

//     if (regax.test(lastName,value)) {
//         valid += 1;
//         lastName.classList.remove("inputInvalid");
//         lastName.classList.add("inputValid");
//     } else {
//         lastName.classList.remove("inputValid");
//         lastName.classList.add("inputInvalid");
//     }

//     const email = document.getElementById("email");
//     regax = /^[^@]+@[^@]+$/;
//     if (regax.text(email.value)) {
//         valid += 1;
//         email.classList.remove("inputInvalid");
//         email.classList.add("inputValid");
//     } else {
//         email.classList.remove("inputValid");
//         email.classList.add("inputInvalid");
//     };

//     const phoneNumber = document.getElementById("phoneNumber");
//     regex = /^\+\d+$/;
//     if (regax.text(phoneNumber.value)) {
//         valid += 1;
//         phoneNumber.classList.remove("inputInvalid");
//         phoneNumber.classList.add("inputValid");
//     } else {
//         phoneNumber.classList.remove("inputValid");
//         phoneNumber.classList.add("inputInvalid");
//     };
// };

// function validatePasswords(password, confirmPassword) {
//     if (password.value === confirmPassword.value) {
//         valid += 1;
//         confirmPassword.classList.remove("inputInvalid");
//         confirmPassword.classList.add("inputValid");
//     } else {
//         confirmPassword.classList.remove("inputValid");
//         confirmPassword.classList.add("inputInvalid");
//     }
// };