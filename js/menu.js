function barFunction() {
  var x = document.getElementById("navLinks");
  $('.header-menu').click(function() {
    if ( x.style.display === "block") {
      x.style.display = "none";
    }
 }) 
  if (x.style.display === "block") {
  x.style.display = "none";
  } else {
  x.style.display = "block";
  }
}