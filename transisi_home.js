document.querySelector('.nextGame').addEventListener('click', function () {
    // Start the slide transition by adding the active class
    const slide = document.querySelector('.transition-slide');
    slide.classList.add('active-slide');

    // Wait for 2 seconds (2000 ms) before navigating to the new page
    setTimeout(function () {
        // Navigate to the new page as the slide moves to the right
        window.location.href = 'game.html'; // Ubah halaman
    }, 1500); // 2 detik, saat slide mulai bergerak ke kanan
});