const mainContainer = document.querySelector(".hsr_tim"),
    imagePreview = mainContainer.querySelectorAll(".gambar_team_1"),
    images = mainContainer.querySelectorAll(".gambar_team_1 img"),
    video = mainContainer.querySelectorAll("video");

window.onload = () => {
    mainContainer.onmouseenter = () => {
        images.forEach((image) => {
            image.style.opacity = 0.5;
        })
    }
    mainContainer.onmouseleave = () => {
        images.forEach((image) => {
            image.style.opacity = 1;
        })
    }

    imagePreview.forEach((image, index) => {
        image.onmouseenter = () => {
            video[index].play();
        }
        image.onmouseleave = () => {
            video[index].pause();
        }
    })
}