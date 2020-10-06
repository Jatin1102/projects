const database = firebase.database();
const rootRef = database.ref("users");

const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  rootRef.child(phoneNumber.value).set({
    Name: name.value,
    Email: email.value,
    Password: password.value,
    PhoneNumber: phoneNumber.value,
  });
});