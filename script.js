let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-72px";
    }

    prevScrollpos = currentScrollPos;
};

function pause() {
    var audio = document.getElementById('meuAudio');
    var button = document.getElementById('playPauseBtn');

    if (audio.paused) {
        audio.play();
        button.innerHTML = '&#9208;';
    } else {
        audio.pause();
        button.innerHTML = '&#9658;';
    }
}

document.getElementById('meuAudio').addEventListener('timeupdate', function () {
    var audio = document.getElementById('meuAudio');
    var progressBar = document.getElementById('progressBar');
    var currentTimeLabel = document.getElementById('currentTime');
    var durationTimeLabel = document.getElementById('durationTime');

    var percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percentage + '%';

    currentTimeLabel.textContent = formatTime(audio.currentTime);
    durationTimeLabel.textContent = formatTime(audio.duration);
});

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var seconds = Math.floor(seconds % 60);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

function setProgress(event) {
    var audio = document.getElementById('meuAudio');
    var progressContainer = document.querySelector('.progress-container');
    var width = progressContainer.offsetWidth;
    var clickX = event.clientX - progressContainer.getBoundingClientRect().left;
    var percentage = (clickX / width);
    audio.currentTime = percentage * audio.duration;
}

function alterarVelocidade(value) {
    var audio = document.getElementById('meuAudio');
    var velocidadeLabel = document.getElementById('velocidadeLabel');

    audio.playbackRate = value;
    velocidadeLabel.textContent = value + 'x';
}

function alternarVisao() {
    var botao = document.getElementById('audio');    
    if (botao.style.display === 'none' || botao.style.display === '') { botao.style.display = 'block'; }
    else { botao.style.display = 'none'; }
}