const $cartAdd = window.document.querySelector(".button-store.-second");

$cartAdd.addEventListener("click", addItem);

function addItem() {
    const $cart = window.document.querySelector(".action.-last");
    $cart.innerHTML = "Carrinho(11)";
}

