document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-button");
    const contents = document.querySelectorAll(".content");

    let currentContent = "Profile"; // ID konten pertama yang ditampilkan

    // Fungsi untuk menampilkan konten sesuai tombol yang ditekan
    function showContent(targetId) {
        contents.forEach(content => {
            if (content.id === targetId) {
                content.classList.add("active");
                content.classList.remove("hidden");
            } else {
                content.classList.remove("active");
                content.classList.add("hidden");
            }
        });
    }

    // Tambahkan event listener ke tombol navigasi
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-content");
            if (currentContent !== targetId) {
                currentContent = targetId;
                showContent(targetId); // Panggil fungsi untuk mengganti konten
            }
        });
    });

    // Tampilkan konten pertama saat halaman dimuat
    showContent(currentContent);
});
