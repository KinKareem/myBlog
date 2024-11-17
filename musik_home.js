const audioPlayer = document.getElementById('audio-player');
const currentTitle = document.getElementById('current-title');
const currentArtist = document.getElementById('current-artist');
const currentCover = document.getElementById('current-cover');
const progressBar = document.getElementById('progress-bar');
const currentTime = document.getElementById('current-time');
const totalTime = document.getElementById('total-time');
const playPauseButton = document.getElementById('play-pause-button');
const toggleButton = document.getElementById('toggle-music-player'); // Tombol untuk menyembunyikan/menampilkan pemutar musik
const toggleIcon = document.getElementById('toggle-icon');
const musicPlayer = document.querySelector('.music-player'); // Elemen pemutar musik
let isPlaying = false;

// Fungsi untuk memutar lagu
function playSong(songSrc, title, artist, cover) {
    audioPlayer.src = songSrc;
    currentTitle.innerText = title;
    currentArtist.innerText = artist;
    currentCover.src = cover;
    audioPlayer.play();
    isPlaying = true;
    playPauseButton.innerText = "⏸️"; // Ubah tombol ke Pause
    audioPlayer.addEventListener('loadedmetadata', updateTotalTime); // Update total time ketika metadata selesai dimuat
}

// Fungsi Play / Pause
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.innerText = "▶️"; // Ubah tombol ke Play
    } else {
        audioPlayer.play();
        playPauseButton.innerText = "⏸️"; // Ubah tombol ke Pause
    }
    isPlaying = !isPlaying;
}

// Update total waktu lagu setelah audio metadata berhasil dimuat
function updateTotalTime() {
    const duration = audioPlayer.duration;
    if (!isNaN(duration)) {
        totalTime.innerText = formatTime(duration);
    }
}

// Update waktu progress lagu
function updateProgress() {
    const current = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    progressBar.value = (current / duration) * 100;
    currentTime.innerText = formatTime(current);
}

// Mengatur seek bar pada pemutar lagu
progressBar.oninput = () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
};

// Format waktu menjadi menit:detik
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

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
