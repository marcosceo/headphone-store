const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", active);

$stars.forEach(function($star) {
    $star.addEventListener("click", active);
})

function active() {
    this.classList.toggle("-active");
}

