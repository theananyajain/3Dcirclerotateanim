
let circle = document.querySelector('.circle')
window.onmousemove = function(elem){
    let x = elem.clientX/-2;
    circle.style.transform = "perspective(1000px) rotateY(" + x + "deg) rotateX(15deg)";
}