let startValue = 10;
const $cartAdd = window.document.querySelector(".-addCart");

$cartAdd.addEventListener("click", addItem);

function addItem() {
    const $cart = window.document.querySelector(".-last");
    $cart.textContent = `Carrinho(${++startValue})`;
}

