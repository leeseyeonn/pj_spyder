/* ----------------------------------슬라이드 배너 */

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

/* -------------------------------------신상품 */

/* solorcore - all */
const row2Bnr = new Swiper('#solarcore_all', { 
    slidesPerView:3.8,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: ".solarcore_next",
        prevEl: ".solarcore_prev",
    },
    scrollbar: {
        el: "#solarcore_all .swiper-scrollbar",
        /* hide: true, */
    },
})


/* ------------------------------------- 콜렉션 */
/* women */

const row3Bnr = new Swiper('#collect_women', { 
    slidesPerView:5.3,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: "#collect_women .swiper-button-next",
        prevEl: "#collect_women .swiper-button-prev",
    },
    scrollbar: {
        el: "#collect_women .swiper-scrollbar",
        /* hide: true, */
    },
})

/* ------------------------------------- 신발 */

const row4Bnr = new Swiper('#shoes', { 
    slidesPerView:4.2,
    spaceBetween: 20,
    /* loop:true, */
    navigation: {
        nextEl: "#shoes .swiper-button-next",
        prevEl: "#shoes .swiper-button-prev",
    },
})

/* ------------------------------------- 이글스 */

/* 상품 슬라이드 */

const row7List = new Swiper('#eagles_list', { 
    slidesPerView:3.8,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: ".row7_ne_btn",
        prevEl: ".row7_pr_btn",
    },
    scrollbar: {
        el: "#eagles_list .swiper-scrollbar",
        /* hide: true, */
    },
})


/* 공지배너 */
const row7Bnr = new Swiper('#eagles_bnr', { 
    loop:true,
    
    pagination: {
        el: "#eagles_bnr .swiper-pagination",
    },
    navigation: {
        nextEl: "#eagles_bnr .swiper-button-next",
        prevEl: "#eagles_bnr .swiper-button-prev",
    },
})


/* ------------------------------------- 빅펀치 */

const row8List = new Swiper('#big_punch_list', { 
    slidesPerView:3.8,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: "#big_punch_list .bp_nex",
        prevEl: "#big_punch_list .bp_pre",
    },
    scrollbar: {
        el: "#big_punch_list .swiper-scrollbar",
        /* hide: true, */
    },
})
