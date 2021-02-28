//Menu
$(document).ready(function () {
	$("#burger").click(function () {
	  if ($("#burger").hasClass("open")) {
		$(this).removeClass("open");
		$(".ba-menu").removeClass("open-menu");
	  } else {
		$(this).addClass("open");
		$(".ba-menu").addClass("open-menu");
		$(".ba-menu__link").click(function () {
			$("#burger").removeClass("open");
			$(".ba-menu").removeClass("open-menu");
		});
	  }
	});
  });

//Scroll
$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
	
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
	
			// Store hash
			var hash = this.hash;
	
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
	
				window.location.hash = hash;
			});
		} 
	});
});