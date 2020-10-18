$(document).ready(function () {

    // Scroll smooth
	$('a[href^="#"]').click(function () {
        let target = $(this.hash);
        
		if (target.length === 0) {
			target = $('a[name="' + this.hash.substr(1) + '"]');
        }
        
		if (target.length === 0) {
			target = $('html');
        }
        
        $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
        
		return false;
    });
    
});
