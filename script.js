let botao = document.getElementById("button");
let audio = new Audio("meow.mp3");
audio.volume = 0.3;

botao.addEventListener("click", function() {
    audio.play();
});