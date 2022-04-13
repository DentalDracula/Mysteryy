var tag = document.getElementById('demo');
var lag = document.getElementById("remo");
var vag = document.getElementById("kemo");
var button = document.querySelector('button');
button.addEventListener('click', function(){
tag.classList.toggle('demo');
lag.classList.toggle('remo');
vag.classList.toggle('kemo');
});