//var icon = document.getElementsByClassName("services-icon");
var serviceDiv = document.querySelectorAll(".services-inner-flex-div");


serviceDiv.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        
        var icon = elem.children[0].children[0];
        var underLine = elem.children[0].children[2];
        //icon.style.color = "black";
        icon.classList.add("service-icon-anim");
        underLine.classList.add("s-t-u-anim");
    });
    elem.addEventListener("mouseout", function() {
        
        var icon = elem.children[0].children[0];
        var underLine = elem.children[0].children[2];
        //icon.style.color = "#2196f3";
        
        icon.classList.remove ("service-icon-anim");
        underLine.classList.remove ("s-t-u-anim");
    });
});