var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto", // 슬라이드 크기를 자동으로 설정하여 각 슬라이드의 너비를 반영
    spaceBetween: 40, // 슬라이드 간의 간격
    centeredSlides: false, // 슬라이드가 가운데 정렬되지 않도록 설정
    loop: true, // 반복 여부
    speed: 500, // 슬라이드 속도
    autoplay: true, // 자동 재생
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 미디어 쿼리 설정
const mediaQuery = window.matchMedia("(max-width: 600px)");

// 미디어 쿼리에 따라 Swiper 설정 변경 함수
function updateSwiperSettings(e) {
    if (e.matches) {
        // 화면이 600px 이하일 때 Swiper 설정 변경
        swiper.params.slidesPerView = 1; // 슬라이드 한 개씩 보이도록 변경
        swiper.params.spaceBetween = 20; // 간격을 20px로 줄임
        swiper.update(); // Swiper 설정 업데이트
    } else {
        // 화면이 600px 이상일 때 원래 설정으로 복원
        swiper.params.slidesPerView = "auto"; // 원래 설정
        swiper.params.spaceBetween = 40; // 원래 설정
        swiper.update(); // Swiper 설정 업데이트
    }
}
