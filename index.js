/* 슬라이드 배너 */

const row1Bnr = new Swiper('#main_banner', { 
    loop:true,
    pagination: {
        el: "#main_banner .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#main_banner .swiper-button-next",
        prevEl: "#main_banner .swiper-button-prev",
    },
})

/* 신상품 배너 */

const row2Bnr = new Swiper('#new_item', { 
    loop:true,
    navigation: {
        nextEl: "#new_item .swiper-button-next",
        prevEl: "#new_item .swiper-button-prev",
    },
})