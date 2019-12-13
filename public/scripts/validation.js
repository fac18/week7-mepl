const username = document.getElementById("new-username");
const password = document.getElementById("new-password");
const userErr = document.getElementById("userErr");

var checkUser = function() {
    if (username.validity.typeMismatch) {
      displayErr(userErr, "Please enter a valid user name");
    } else if (username.validity.valueMissing) {
      displayErr(userErr, "Please enter a user name");
    } else {
      displayErr(userErr, "");
      return true;
    }
  };
  

var checkPassword = function() {
  if (password.validity.patternMismatch) {
    displayErr(
      userErr,
      "Password must contain at least eight characters, including one letter and one number"
    );
  } else if (password.validity.valueMissing) {
    displayErr(userErr, "Please enter a password");
  } else {
    displayErr(userErr, "");
    return true;
  }
};

function displayErr(errElem, errMsg) {
  errElem.innerText = errMsg;
}

username.addEventListener("focusout", checkUser);
password.addEventListener("focusout", checkPassword);