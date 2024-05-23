var sound = document.getElementById("sound");
var song = document.getElementById("song");
var canço = document.getElementById("canço");
var artista = document.getElementById("artista");
var temps = document.getElementById("temps");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var imatge = document.getElementById("img");
var portada = document.getElementById("portada");
var slider = document.getElementById("rangeInput");
var output = document.getElementById("rangeValue");

let cançons;
let pos = 0

window.onload = function () {
    fetch('/cançons.json')
        .then(response => response.json())
        .then(data => {
            cançons = data
            // song.innerHTML = `<source src="${data[pos].path}" type="audio/mp3">`
            song.src = data[pos].path;
            canço.innerHTML = data[pos].name;
            artista.innerHTML = data[pos].artist;
            temps.innerHTML = data[pos].duration;
            imatge.src = data[pos].img;
        });
};

function loadSong() {
    song.src = cançons[pos].path;
    song.play();
    canço.innerHTML = cançons[pos].name;
    artista.innerHTML = cançons[pos].artist;
    temps.innerHTML = cançons[pos].duration;
    imatge.src = cançons[pos].img;
}


function reproSound() {
    if (song.paused) {
        song.play();
        sound.innerHTML = 'play_circle';
        portada.classList.add('rotating')
    } else {
        song.pause();
        sound.innerHTML = 'pause_circle';
        portada.classList.remove('rotating')
    }

}

function nextSong() {
    if (pos == 2) {
        pos = 0
    } else {
        pos++
    }
    loadSong()

}

function previousSong() {
    if (pos == 0) {
        pos = 2
    } else {
        pos--
    }
    loadSong()
}


output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
    song.volume = this.value / 100;
}





