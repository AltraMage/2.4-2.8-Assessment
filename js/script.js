//init function when the page is scrolled (with mouse or other)
window.onscroll = function() {niceNav()};

// create the variables
var navbar = document.getElementById("navbar");
var css_sucks = document.getElementById("css_sucks");
var sticky = navbar.offsetTop;

function niceNav() {
  if (window.scrollY >= sticky) {
    // Make the nav sticky and add a ghost div with the nav size
    navbar.classList.add("sticky");
    css_sucks.style.height = "50px";
  } else {
    // Remove the class and get rid of the element.
    navbar.classList.remove("sticky");
    css_sucks.style.height = "0px";
  }
}