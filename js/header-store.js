const $headerStore = document.querySelector(".header-store");
const $menu = $headerStore.querySelector(".menu");
const $item = $headerStore.querySelectorAll(".item");
const $img = $headerStore.querySelector("img");

$menu.addEventListener("click", () => {
      $item.forEach((item) => {
        item.classList.toggle("-active");
      });
      $menu.classList.toggle("-active");
      if($menu.classList.contains("-active")) {
        $img.src = "img/close.png";
      } else {
        $img.src = "img/menu.png";
      }
})