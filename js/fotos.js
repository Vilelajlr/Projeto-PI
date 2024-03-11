$(document).ready(function() {
    $('.img').hide();
    $('.img1').hide();

    $('.img').each(function(i) {
        $(this).delay(1500*i).fadeIn();
    });
    
    $('.img1').each(function(i) {
        $(this).delay(1500*i).fadeIn();
    });
});