
// Fixed Header Start

$(window).scroll(function () {

    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedHeader');
    } else {
        $('.header').removeClass('fixedHeader');
    }
});

// Fixed Header Start



///   Sidebar Start

$('.navbar-toggler').click(function () {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
        $('.navbar-expand-md .navbar-collapse').css('left', '-275px');
    } else {
        $('.navbar-expand-md .navbar-collapse').css('left', '0px');
    }
});

//   Sidebar End

//   Navbar Button Style Start

$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });
});

$(document).on('click','.bannerLeftIn ul li a',function(){
	$('.bannerLeftIn ul li a').removeClass('active');
	$(this).addClass('active');
});
$(document).on('click','.navbar-expand-md .navbar-nav .nav-link',function(){
	$('.navbar-expand-md .navbar-nav .nav-link').removeClass('active');
	$(this).addClass('active');
});
$(document).on('click','.medxAppIn ul li a' ,function(){
	var id =$(this).data('id');
	$('.medxAppIn ul li a').removeClass('active');
	$(this).addClass('active');
	$(".ShowApp").removeClass('active');
	$(".app"+ id).addClass('active');
});
$(document).on('click','.cloneBtn ul li a',function(){
	$('.cloneBtn ul li a').removeClass('active');
	$(this).addClass('active');
});
