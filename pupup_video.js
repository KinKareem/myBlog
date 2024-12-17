const animeFigure = document.querySelector('.anime');
const videoElement = document.getElementById('videoElement');

animeFigure.addEventListener('mouseenter', () => {
    videoElement.currentTime = 0; // Set waktu video ke 0 (awal)
    videoElement.play().catch((error) => {
        console.error("Video playback failed:", error);
    }); // Mulai memutar video, tangkap kesalahan
});

animeFigure.addEventListener('mouseleave', () => {
    videoElement.pause(); // Hentikan pemutaran video
    videoElement.currentTime = 0; // Set waktu video ke 0 (awal)
});
