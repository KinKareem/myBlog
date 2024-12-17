// script.js

const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const prevSongBtn = document.getElementById('prev-song');
const nextSongBtn = document.getElementById('next-song');
const songTitle = document.getElementById('marquee');
const currentTimeDisplay = document.getElementById('current-time');
const progressBar = document.getElementById('progress-bar');
const toggleButton = document.getElementById('toggle-music-player'); // Tombol untuk menyembunyikan/menampilkan pemutar musik
const toggleIcon = document.getElementById('toggle-icon');
const musicPlayer = document.querySelector('.music-player'); // Elemen pemutar musik


let isPlaying = false;
let currentSongIndex = 0;
const songs = [
    { title: "Dolia Sing to Save Heino", url: "music/Dolia.mp3" },
    { title: "Invincible Honor of Kings Esports", url: "music/Invincible Honor of Kings Esports.mp3" },
    { title: "This World  True Hertz  Honor of Kings", url: "music/This World  True Hertz  Honor of Kings.mp3" }
];

// Load first song
function loadSong(song) {
    audioPlayer.src = song.url;
    songTitle.textContent = song.title;
    audioPlayer.load();
}

// Play or pause the song
function playPauseMusic() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶️';
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
}

// Update the time display
function updateTime() {
    const minutes = Math.floor(audioPlayer.currentTime / 60);
    const seconds = Math.floor(audioPlayer.currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Update progress bar based on current time and duration
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
}

// Play the next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
    isPlaying = true;
}

// Play the previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
    isPlaying = true;
}

// Event listener for when the song ends
audioPlayer.addEventListener('ended', () => {
    nextSong();  // Automatically play the next song when the current one ends
});

// Load initial song and add event listeners
loadSong(songs[currentSongIndex]);

audioPlayer.addEventListener('timeupdate', updateTime);
playPauseBtn.addEventListener('click', playPauseMusic);
nextSongBtn.addEventListener('click', nextSong);
prevSongBtn.addEventListener('click', prevSong);

// Autoplay on load
window.addEventListener('load', () => {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
    isPlaying = true;
});

// Toggle music player visibility
toggleButton.addEventListener('click', () => {
    musicPlayer.classList.toggle('hidden'); // Menambahkan atau menghapus kelas 'hidden'

    // Ubah ikon berdasarkan status visibility pemutar musik
    if (musicPlayer.classList.contains('hidden')) {
        toggleIcon.src = 'music/oui_arrow-right.png'; // Ganti dengan path gambar "arrow-right"
    } else {
        toggleIcon.src = 'music/oui_arrow-left.png'; // Ganti dengan path gambar "arrow-left"
    }
});
