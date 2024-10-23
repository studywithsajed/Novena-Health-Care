
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

/*stacky navbar*/
document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      header.style.top = '0px';
    } else {
      header.classList.remove('scrolled');
      header.style.top = '58px';
    }
  });
});
/*stacky navbar*/