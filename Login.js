function ValidateEmail() {
  var mail = document.getElementById("text").value;

  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  if (regx.test(mail)) {
    alert("you have provided valid email id");
    return true;
  } else {
    alert("please check your emai id and try again");
    return false;
  }
}
