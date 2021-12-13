var elements, elementsDiv1, elementsDiv2;
var windowHeight;

function init() {
  elementsDiv1 = document.querySelectorAll('.our-work-flex-1');
  elementsDiv2 = document.querySelectorAll('.our-work-flex-2');
  windowHeight = window.innerHeight;
  //console.log(windowHeight);
}

function checkPosition() {
  for (var i = 0; i < elementsDiv1.length; i++) {
    var element = elementsDiv1[i];
    var positionFromTop = elementsDiv1[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add('right-to-left');

    }
  }
  for (var i = 0; i < elementsDiv2.length; i++) {
    var element = elementsDiv2[i];
    var positionFromTop = elementsDiv2[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add('left-to-right');

    }
  }
  
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();
checkPosition();