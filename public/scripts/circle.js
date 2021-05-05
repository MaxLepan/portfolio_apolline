let circle = document.querySelector(".my-projects-circle");
let carousel = document.querySelector("#carousel");

circle.addEventListener("click", () => {
    carousel.scrollIntoView({behavior: "smooth"});
})