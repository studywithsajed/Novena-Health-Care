
/*Preloader */
 
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

 /*Preloader */


/*scroll bar*/
 $(window).on('scroll', function () {
   if ($(this).scrollTop() > 100) {
     $('#scrollToTop').fadeIn();
   } else {
     $('#scrollToTop').fadeOut();
   }
 });

 // Scroll to top when button is clicked
 $('#scrollToTop').on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: 0
   }, 'slow');
 });
 
/*scroll bar*/
