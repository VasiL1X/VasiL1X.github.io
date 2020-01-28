$(function() {
	
	$(".slider__inner, .news__slider-inner").slick({

		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false

	});

	$('select').styler();

	$('.header__btn-menu').on('click', function() {
		$('.menu ul').slideToggle();
	})

	/*  Fixed Header  */

	var header = $("#header__content"),
	introH = $('#header__top').innerHeight(),
	scrollOffset = $(window).scrollTop();

	checkScroll(scrollOffset);

	$(window).on("scroll", function() {

		console.log(scrollOffset);

		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
		
	});

	function checkScroll(scrollOffset) {
		if(scrollOffset > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/*Scroll*/ 



	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;
		console.log($this);
		
		/*$("#nav a").removeClass("active");
		$this.addClass("active");

		$("#nav").removeClass("active");
		$("#nav_toggle").removeClass("active");*/

		$("html, body").animate({
			scrollTop: blockOffset - header.innerHeight()
		});
	})



});