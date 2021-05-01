let video = document.querySelector("#logo_anim");
let videoWrapper = document.querySelector("#logo_anim_wrapper");
let alreadyPlayed;

if (sessionStorage.getItem("alreadyPlayed") === null){
    alreadyPlayed = false;
} else {
    alreadyPlayed = sessionStorage.getItem('alreadyPlayed');
}


function noScroll() {
    window.scrollTo(0, 0);
}


if (alreadyPlayed === false) {
    video.play();
    alreadyPlayed = true;
    sessionStorage.setItem('alreadyPlayed', alreadyPlayed);
    window.addEventListener('scroll', noScroll);


    video.addEventListener("ended", () => {
        video.classList.add("animation");
    })

    video.addEventListener("animationend", () => {
        videoWrapper.style.display = "none";
        videoWrapper.style.zIndex = "0";
        window.removeEventListener('scroll', noScroll);
    })
} else {
    videoWrapper.style.display = "none";
    videoWrapper.style.zIndex = "0";
    window.removeEventListener('scroll', noScroll);
}


