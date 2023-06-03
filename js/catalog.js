
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




document.addEventListener('DOMContentLoaded', function() {
    var aboutFilter = document.querySelector('.filtr');
    aboutFilter.style.display = 'none';
  
    var filterButton = document.querySelector('.info__filter');
    filterButton.addEventListener('click', toggleFilter);
  });
  
  function toggleFilter() {
    var aboutFilter = document.querySelector('.filtr');
  
    if (aboutFilter.style.display === 'none') {
      aboutFilter.style.display = 'block';
    } else {
      aboutFilter.style.display = 'none';
    }
  }


function toggleFilterActive() {
    var filterSection = document.querySelector('.filtr');
    var btnSizes = document.querySelector('.btn-order');    
    if (filterSection.classList.contains('active')) {
        filterSection.classList.remove('active');
        btnSizes.style.display = 'none';
    } else {
        filterSection.classList.add('active');
        btnSizes.style.display = 'block';
    }
}
