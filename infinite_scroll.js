// Ambil container isi_anime
const animeContainer = document.querySelector('.isi_anime');
const scrollContainer = document.querySelector('.horizontal_scroll');
const clones = animeContainer.innerHTML; // Ambil konten yang ada

animeContainer.innerHTML += clones; // Duplikat elemen-elemen yang ada

// Fungsi untuk mengatur ulang scroll jika sudah mencapai akhir
function checkScroll() {
    const maxScrollLeft = animeContainer.scrollWidth / 2; // Setengah dari total lebar konten (karena ada duplikasi)

    if (scrollContainer.scrollLeft >= maxScrollLeft) {
        scrollContainer.scrollLeft = 0; // Reset ke awal
    } else if (scrollContainer.scrollLeft === 0) {
        scrollContainer.scrollLeft = maxScrollLeft; // Lompat ke tengah jika di awal
    }
}

// Event listener untuk scroll
scrollContainer.addEventListener('scroll', checkScroll);
