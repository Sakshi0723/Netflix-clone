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