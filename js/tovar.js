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
