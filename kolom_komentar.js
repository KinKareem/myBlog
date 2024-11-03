"use strict";

const userId = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null
};

const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");
let commentsCount = 0; // Menyimpan jumlah komentar

userComment.addEventListener("input", e => {
    if (!userComment.value) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");
    } else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled");
    }
});

function addPost() {
    if (!userComment.value) return;

    // Menyimpan informasi komentar
    userId.name = userName.value || "Anonymous";
    if (userId.name === "Anonymous") {
        userId.identity = false;
        userId.image = "aset comment/user.png";
    } else {
        userId.identity = true;
        userId.image = "aset comment/user.png";
    }

    userId.message = userComment.value;
    userId.date = new Date().toLocaleString(); // Menambahkan waktu lengkap (tanggal dan jam)

    // Membuat tampilan komentar
    let published = `
        <div class="parents">
            <img src="${userId.image}" >
            <div> 
                <h1>${userId.name}</h1>
                <p>${userId.message}</p>
                <div class="engagements">
                    <img src="like.png">
                    <img src="share.png">
                </div>
                <span class="date">${userId.date}</span>
            </div>
        </div>`;

    comments.innerHTML += published;

    // Mengosongkan textarea setelah komentar dipublikasikan
    userComment.value = "";
    publishBtn.setAttribute("disabled", "disabled");
    publishBtn.classList.remove("abled");

    // Menambah jumlah komentar setiap kali komentar dipublikasikan
    commentsCount++;
    document.getElementById("comment").textContent = commentsCount;
}

publishBtn.addEventListener("click", addPost);
