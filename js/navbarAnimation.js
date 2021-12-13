var topImage, topImage2, navbar;
var windowHeight;
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

function init() {
  topImage = document.getElementById('top-image-section');
  topImage2 = document.getElementById('blog-page-top-brand-name-section');
  navbar = document.getElementById('navbar-section-float');
  windowHeight = window.innerHeight;
}

function checkPosition() {

  var positionFromTop;
  if (topImage) {
    positionFromTop = topImage.getBoundingClientRect().top;
  } else if (topImage2) {
    positionFromTop = topImage2.getBoundingClientRect().top;
  }
  
  //console.log(positionFromTop);
  if (positionFromTop >= 0) {
    navbar.classList.add("not-visible");
    
  } else {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      //Scroll Down
      navbar.classList.remove("pos-fixed-top");
      navbar.classList.add("not-visible");

    } else {
      // Scroll Up
      navbar.classList.add("pos-fixed-top");
      navbar.classList.remove("not-visible");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }



}


window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();
checkPosition();
