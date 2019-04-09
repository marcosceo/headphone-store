const $label = document.querySelector("label");
const $search = document.querySelector(".form");

const $img = document.querySelector("img");

$label.addEventListener("click", () => {
    $search.classList.toggle("-active");
    if($search.classList.contains("-active")) {
        $img.src = "img/close.png";
    } else {
        $img.src = "img/search.png";
    }
})



