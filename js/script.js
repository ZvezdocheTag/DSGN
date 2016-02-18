

$(document).ready(function() {

  $('#burgerBtn').on('click', function(e) {
  	e.preventDefault;

  	var $this = $(this),
  		containerBtn = $this.closest('.header__navigation'),
  		navMenu = containerBtn.find('.header__menu');

  		$(navMenu).addClass('active');
  	 return false;
  });


  $('.menu__cross').on('click', function(e) {
  	e.preventDefault;

  		$('.header__menu').removeClass('active');
  	 return false;
  });



   // portfolio
 $('a.item-btn').on('click', function(e) {
  	e.preventDefault;
 	
     var itemID = $(this).attr('href');

     $('.item-page').addClass('active');
     return false;
 });

  $('.btn__close').on('click', function(e) {
  	e.preventDefault;
     $('.item-page').removeClass('active');
     return false;
 });


 $("a.item-btn").on('click', function(e) {
  	e.preventDefault;
     $('html, body').animate({
         scrollTop: parseInt($(".projects").offset().top)
     }, 400);
 });


});