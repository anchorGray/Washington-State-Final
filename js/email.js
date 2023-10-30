function compareEmails() {
  var email = document.getElementById("email1").value;
  var confirmEmail = document.getElementById("email2").value;
  if (email != confirmEmail) {
    alert("Emails do not match.");
    return false;
  } else if (email == confirmEmail) {
    alert("You are signed-up for our newsletter! Thank you.");
    return true;
  }
}