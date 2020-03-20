$( document ).ready(function() {

	// --------------main navigation---------------------

	$('.nav__link').on('click', function(e) {
		let $subMenu = $(this).next('.nav__list-sub');
		$('.nav__link, .nav__link-sub, .nav__list-sub').not($subMenu).filter('nav .active').removeClass('active');
		if ($subMenu.length) {
			e.preventDefault();
			$(this).toggleClass('active');
			$subMenu.toggleClass('active');
		} 
	});

	$('.nav__link-sub').on('click', function(e) {
		let $subMenu = $(this).next('.nav__list-sub');
		$('.nav__link, .nav__link-sub, .nav__list-sub').not($subMenu).filter('nav .nav__list-sub.active .active').removeClass('active'); 
		if ($subMenu.length) {
			e.preventDefault();
			$(this).toggleClass('active');
			$subMenu.toggleClass('active');
		} 
	});

	$('body').on('click', function(e) {
		if( !$(e.target).is('.nav__link, .nav__link-sub') ) {
			$('.nav__link, .nav__link-sub, .nav__list-sub').filter('nav .active').removeClass('active');
		}
	});

	// --------------catalog accordion---------------------

	$('.catalog__item').on('click', function(e) {
		e.stopPropagation();
		$(this).children('.catalog__item-text').toggleClass('active');
		$(this).children('.catalog__list').slideToggle();
	});

	// --------------nav mobile---------------------

	$('.header__btn-menu').on('click', function() {
		$('.site-wrap, .nav-mobile-wrap, .nav-mobile-btn, .header__btn-menu .toggle-btn, .nav-mobile-btn .toggle-btn').addClass('active');

	});

	$('.nav-mobile-btn').on('click', function() {
		$('.site-wrap, .nav-mobile-wrap, .nav-mobile-btn, .header__btn-menu .toggle-btn,  .nav-mobile-btn .toggle-btn').removeClass('active');
	});

	$('span.nav-mobile__text').on('click', function() {
		$(this).toggleClass('active');
		$(this).next('.nav-mobile__list').slideToggle();
	});

	


});