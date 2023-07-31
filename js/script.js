window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var css_sucks = document.getElementById("css_sucks");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
    css_sucks.style.height = "50px";
  } else {
    navbar.classList.remove("sticky");
    css_sucks.style.height = "0px";
  }
}