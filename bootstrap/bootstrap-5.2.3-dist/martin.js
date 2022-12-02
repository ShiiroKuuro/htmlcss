$('h2').next().slideToggle(10);
$(function() {
	$('h2').on("click", function() {
		$(this).next().slideToggle();
	});
});