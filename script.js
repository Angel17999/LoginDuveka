function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "MirkoKL" && password === "12345678") {
      window.location.href = "https://duveka.de/";
      return false;
    } else {
      window.alert("Wrong password or username. Please try again.");
      return false;
    }
  }
  