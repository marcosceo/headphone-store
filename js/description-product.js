const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleSelector);

function handleSelector() {
    $heart.classList.toggle("-active");
}