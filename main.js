var bars = document.querySelector("#bars");
var header = document.querySelector("header");
var a = document.querySelectorAll("#navbar a");

bars.addEventListener('click',function (event) {
    header.classList.toggle('open');
});

a.addEventListener('click', function (event) {
   header.classList.remove('open');
});
