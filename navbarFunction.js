//Source: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function navFunction() {
  var x = document.getElementById("navBarJS");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}