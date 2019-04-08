const $heart = document.querySelector(".-heart");
let $stars = document.querySelectorAll(".star");

console.log($stars);

$heart.addEventListener("click", active);

for (let e = 0; e < $stars.length; e++) {
    $stars[e].addEventListener("click", function () {
        for (i = 4; i >= 0; i--) {
            $stars[i].classList.remove("-active");
        }
        for (i = e; i >= 0; i--) {
            $stars[i].classList.add("-active");
        }
    })
}

function active() {
    this.classList.toggle("-active");
}




// Primeira versao do codigo(para funcionar tem que adicionar as classes first-fifth no HTML):

// $stars.forEach(function ($star) {
//     $star.addEventListener("click", activeStar);
// })

// function activeStar() {
//     if (this.classList.contains("-first")) {
//         if ($stars[0].classList.contains("-active")) {
//             for (let i = 4; i >= 1; i--) {
//                 $stars[i].classList.remove("-active");
//             }
//         } else {
//             this.classList.toggle("-active");
//         }
//     } else if (this.classList.contains("-second")) {
//         if ($stars[1].classList.contains("-active")) {
//             for (let i = 4; i >= 2 ; i--) {
//                 $stars[i].classList.remove("-active");
//             }
//         } else {
//             for (let i = 1; i >= 0; i--) {
//                 $stars[i].classList.add("-active");
//             }
//         }
//     } else if (this.classList.contains("-third")) {
//         if ($stars[2].classList.contains("-active")) {
//             for (let i = 4; i >= 3; i--) {
//                 $stars[i].classList.remove("-active");
//             }
//         } else {
//             for (let i = 2; i >= 0; i--) {
//                 $stars[i].classList.add("-active");
//             }
//         }
//     } else if (this.classList.contains("-fourth")) {
//         if ($stars[3].classList.contains("-active")) {
//             for (let i = 4; i >= 4; i--) {
//                 $stars[i].classList.remove("-active");
//             }
//         } else {
//             for (let i = 3; i >= 0; i--) {
//                 $stars[i].classList.add("-active");
//             }
//         }
//     } else if (this.classList.contains("-fifth")) {
//         if ($stars[4].classList.contains("-active")) {
//             for (let i = 4; i > 4; i--) {
//                 $stars[i].classList.remove("-active");
//             }
//         } else {
//             for (let i = 4; i >= 0; i--) {
//                 $stars[i].classList.add("-active");
//             }
//         }
//     }
// }

