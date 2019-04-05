const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", active);

$stars.forEach(function ($star) {
    $star.addEventListener("click", activeStar);
})

function active() {
    this.classList.toggle("-active");
}

function activeStar() {
    if (this.classList.contains("-first")) {
        if ($stars[0].classList.contains("-active")) {
            for (let i = 4; i >= 1; i--) {
                $stars[i].classList.remove("-active");
            }
        } else {
            this.classList.toggle("-active");
        }
    } else if (this.classList.contains("-second")) {
        if ($stars[1].classList.contains("-active")) {
            for (let i = 4; i >= 2 ; i--) {
                $stars[i].classList.remove("-active");
            }
        } else {
            for (let i = 1; i >= 0; i--) {
                $stars[i].classList.add("-active");
            }
        }
    } else if (this.classList.contains("-third")) {
        if ($stars[2].classList.contains("-active")) {
            for (let i = 4; i >= 3; i--) {
                $stars[i].classList.remove("-active");
            }
        } else {
            for (let i = 2; i >= 0; i--) {
                $stars[i].classList.add("-active");
            }
        }
    } else if (this.classList.contains("-fourth")) {
        if ($stars[3].classList.contains("-active")) {
            for (let i = 4; i >= 4; i--) {
                $stars[i].classList.remove("-active");
            }
        } else {
            for (let i = 3; i >= 0; i--) {
                $stars[i].classList.add("-active");
            }
        }
    } else if (this.classList.contains("-fifth")) {
        if ($stars[4].classList.contains("-active")) {
            for (let i = 4; i > 4; i--) {
                $stars[i].classList.remove("-active");
            }
        } else {
            for (let i = 4; i >= 0; i--) {
                $stars[i].classList.add("-active");
            }
        }
    }
}