var span1, span2, span3;
var windowHeight;

function init() {
    span1 = document.getElementById('t-i-intro-1');
    span2 = document.getElementById('t-i-intro-2');
    span3 = document.getElementById('t-i-intro-3');
    windowHeight = window.innerHeight;
}

function checkPosition() {

    var positionFromTop = span1.getBoundingClientRect().top;
 
    if (positionFromTop >= 0) {
        span1.classList.add("t-i-intro-anim-1");
        span2.classList.add("t-i-intro-anim-2");
        span3.classList.add("t-i-intro-anim-3");
    }

}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();
checkPosition();
