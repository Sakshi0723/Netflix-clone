   function signin() {
        document.getElementById("signin-form").style.display = "block";
        document.querySelector(".content").style.display = "none";
        document.querySelector(".trending").style.display = "none";
        document.querySelector(".reasons").style.display = "none";
        document.getElementById("language").style.display = "none";
        document.getElementById("sign-in").style.display = "none";
       const hero = document.querySelector(".hero");
       hero.style.backgroundImage = "none";
       hero.style.background ="linear-gradient(to top, #000000, #230c0c, #3c1515)";
      const header= document.querySelector(".header");
      header.style.background="none";
      header.style.borderBottom = "1px solid #3e3d3d";
    }

    function GetStarted(){
      window.location.href="main.html";
    }

    const emailInput = document.getElementById("email");

emailInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        event.preventDefault();

        if (emailInput.value.trim() !== "") {
            window.location.href = "main.html";
        } else {
            alert("Please enter your email address.");
        }
    }

});
function SigninSubmit() {

    const email = document.getElementById("signin-email").value.trim();

    if (email === "") {
        alert("Please enter your email or mobile number.");
        return;
    }

    window.location.href = "main.html";
}