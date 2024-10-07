document.querySelector('.nextGame').addEventListener('click', function () {
    // Start the slide transition
    const slide = document.querySelector('.transition-slide');
    slide.style.left = '0';

    // Wait for the animation to finish before navigating to a new page
    setTimeout(function () {
        // Navigate to the new page after animation
        window.location.href = 'game.html';
    }, 1000); // Match this timing with the CSS transition (1s)
});