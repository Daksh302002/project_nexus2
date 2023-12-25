let signup = document.getElementById("signup");
let login = document.getElementById("login");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let ischecked = true;

login.onclick = () => {
  // nameField.style.maxHeight = "0";
  title.innerHTML = "Login";
  signup.classList.add("disable");
  login.classList.remove("disable");
  if (ischecked) {
    nameField.style.display = "none";
  }
};
signup.onclick = () => {
  // nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signup.classList.remove("disable");
  login.classList.add("disable");
  if (ischecked) {
    nameField.style.display = "flex";
  }
};
let check = () => {
  if (
    document.getElementById("psw").value ==
    document.getElementById("cpsw").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "Matching";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = " Password is Not Matching";
  }
};
