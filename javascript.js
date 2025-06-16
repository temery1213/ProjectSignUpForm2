var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
const confirmInput = document.getElementById("confirmPassword");
const matchMessage = document.getElementById("matchMessage");

// Show/hide password requirements box
myInput.onfocus = () => document.getElementById("message").style.display = "block";
myInput.onblur = () => document.getElementById("message").style.display = "none";

// Live validation of password requirements
myInput.onkeyup = function() {
  const val = myInput.value;

  // Validate lowercase
  val.match(/[a-z]/) ? letter.classList.replace("invalid", "valid") : letter.classList.replace("valid", "invalid");

  // Validate uppercase
  val.match(/[A-Z]/) ? capital.classList.replace("invalid", "valid") : capital.classList.replace("valid", "invalid");

  // Validate numbers
  val.match(/[0-9]/) ? number.classList.replace("invalid", "valid") : number.classList.replace("valid", "invalid");

  // Validate length
  val.length >= 8 ? length.classList.replace("invalid", "valid") : length.classList.replace("valid", "invalid");
}

// Live password match feedback
function checkPasswordMatch() {
  if (confirmInput.value === "") {
    matchMessage.classList.remove("valid");
    matchMessage.classList.add("invalid");
    matchMessage.textContent = "Passwords must match";
    return;
  }

  if (myInput.value === confirmInput.value) {
    matchMessage.classList.remove("invalid");
    matchMessage.classList.add("valid");
    matchMessage.textContent = "Passwords match";
  } else {
    matchMessage.classList.remove("valid");
    matchMessage.classList.add("invalid");
    matchMessage.textContent = "Passwords must match";
  }
}

// Check match on input change
myInput.addEventListener("input", checkPasswordMatch);
confirmInput.addEventListener("input", checkPasswordMatch);

// Prevent submission if passwords don't match
document.querySelector(".Form").addEventListener("submit", function(e) {
  if (myInput.value !== confirmInput.value) {
    alert("Passwords do not match!");
    e.preventDefault();
  }
});
