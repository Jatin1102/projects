const database = firebase.database();
const rootRef = database.ref("users");

const name = document.getElementById("inputName");
const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");
const phoneNumber = document.getElementById("inputPhone");
const addBtn = document.getElementById("quickstart-sign-in");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // const autoId = rootRef.push().key;
  rootRef.child(phoneNumber.value).set({
    Name: name.value,
    Email: email.value,
    Password: password.value,
    PhoneNumber: phoneNumber.value,
  });
});

$(addBtn).on("click", function () {
  $(".form-signin input:required").each(function () {
    if (this.value === "") {
      alert("Please fill all field");
    } else {
      addBtn.disabled = false;
    }
  });
});
