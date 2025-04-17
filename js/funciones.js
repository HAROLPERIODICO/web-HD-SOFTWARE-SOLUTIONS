jQuery(document).ready(listo);



function listo()
{
	jQuery(".nav__menu").click(function(e){
		e.preventDefault();
		jQuery(".nav__link").toggleClass("open");
		jQuery(".nav__menu i").toggleClass("fa-times");
	});

	jQuery("nav__link--show").click(function(){

		jQuery("nav__link--show").removeClass("open");
		jQuery(".nav__menu i").removeClass("fa-times");

		var dev = jQuery(this).attr("href");

		jQuery("html,body").animate({
			"scrollTop": jQuery(dev).offset().top - 76
		})
	})

}
