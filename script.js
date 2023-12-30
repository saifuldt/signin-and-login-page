// const submit=document.querySelector(".submit");

// function res(){
//     addEventListener(click, submit)=prompt("Thank You")
// };

// const submit = document.querySelector(".submit");

// function res() {
//     submit.addEventListener('click', function() {
//         alert(`Thank You `);
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     res(); // Call the res function after the DOM is fully loaded
// });
// const submit = document.querySelector(".submit");
// const overlay = document.getElementById("overlay");

// function showMessage() {
//   overlay.style.display = "flex";
// }

// function closeMessage() {
//   overlay.style.display = "none";
// }

// submit.addEventListener("click", function() {
//   showMessage();
// });
// overlay.addEventListener("click", function(){
//     closeMessage()
// })


const loginPage = document.querySelector("#loginpage");
const login = document.querySelector("#loginbtn");
const regPage = document.querySelector("#regpage");
const signup = document.querySelector("#signupbtn")


login.addEventListener("click", function() {
    loginPage.click();
  });
signup.addEventListener("click", function() {
    regPage.click();
});