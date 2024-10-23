// // 메뉴 열기
// document.querySelector(".btn-mobile-menu").addEventListener("click", function () {
//     document.querySelector(".mobile-gnb").classList.toggle("active");
// });

// // 메뉴 닫기 (X 버튼 클릭 시)
// document.querySelector(".btn-close-menu").addEventListener("click", function () {
//     document.querySelector(".mobile-gnb").classList.remove("active");
// });

document.addEventListener("DOMContentLoaded", function () {
    const btnMobileMenu = document.querySelector(".btn-mobile-menu");
    const mobileGnb = document.querySelector(".mobile-gnb");

    btnMobileMenu.addEventListener("click", function () {
        mobileGnb.classList.toggle("active"); // active 클래스 토글
    });
});
