const database = firebase.database();
const rootRef = database.ref("users");

const name = document.getElementById("inputName");
const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");
const phoneNumber = document.getElementById("inputPhone");
const addBtn = document.getElementById("quickstart-sign-in");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const autoId = rootRef.push().key;
  rootRef.child(autoId).set({
    Name: name.value,
    Email: email.value,
    Password: password.value,
    PhoneNumber: phoneNumber.value,
  });
});
