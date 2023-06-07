$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 15000);
    });
});


function toggleAbout() {
    var aboutSection = document.querySelector('.dropdown-overlay');
    var body = document.querySelector('body');

    if (aboutSection.style.display === '' || aboutSection.style.display === 'none') {
        aboutSection.style.display = 'block';
        body.style.overflow = 'hidden';
    } else {
        aboutSection.style.display = 'none';
        body.style.overflow = '';
    }
}


