document.addEventListener("DOMContentLoaded", () => {
});
// Burger
$('.menu .button').click(function (event) {
   $(this).toggleClass('active');
   $('.burger').toggleClass('active');
   return false;
});