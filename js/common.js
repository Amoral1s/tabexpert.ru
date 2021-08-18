jQuery(document).ready(function ($) {

	
  $('.burger').on('click', function() {
		$('.burger').toggleClass('burger-active');
		$('.header').toggleClass('header-active');
		$('.header-nav-menu').slideToggle(200);
	});

	$('#check').on('change', function() {
		if ($('#check').is(':checked')) {
			$('.question-wrap-right .form-row .button').removeClass('disabled');
		} else {
			$('.question-wrap-right .form-row .button').addClass('disabled');
		}
	});
	$('#check2').on('change', function() {
		if ($('#check2').is(':checked')) {
			$('.popup-callback .form-row .button').removeClass('disabled');
		} else {
			$('.popup-callback .form-row .button').addClass('disabled');
		}
	});
	

	$('.sert-wrap').slick({
		dots: false,
		arrows: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 578,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.sert-wrap img').on('click', function() {
		$('.popup-img').fadeIn(300);
		$('.overlay').fadeIn(300);
		$('.popup-img img').attr('src', $(this).attr('src'));
	});

	$('.call-consult').on('click', function() {
		$('.popup-callback').fadeIn(300);
		$('.overlay').fadeIn(300);
	});
	$('.call-video').on('click', function() {
		$('.popup-video').fadeIn(300);
		$('.overlay').fadeIn(300);
	});

	$('.overlay').on('click', function() {
		$('.popup').fadeOut(300);
		$(this).fadeOut(300);
	});
	$('.close').on('click', function() {
		$('.popup').fadeOut(300);
		$('.overlay').fadeOut(300);
	});
  




	const selects = document.querySelectorAll('select');
	if (selects) {
		selects.forEach((elem) => {
				elem.parentElement.classList.add('select-wrapper');
		});
	} //end selects forEach / Добавление стрелочки к обертке select

}); //document ready