const mainContainer = document.querySelector(".container_hero"),
    imagePreview = mainContainer.querySelectorAll(".image_hero"),
    images = mainContainer.querySelectorAll(".image_hero img"),
    video = mainContainer.querySelectorAll(".image_hero video");

window.onload = () => {

    imagePreview.forEach((image, index) => {
        image.onmouseenter = () => {
            video[index].play();
        }
        image.onmouseleave = () => {
            video[index].pause();
        }
    })
}