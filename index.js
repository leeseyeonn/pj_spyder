/* ----------------------------------슬라이드 배너 */

const row1Bnr = new Swiper('#main_banner', { 
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: "#main_banner .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#main_banner .swiper-button-next",
        prevEl: "#main_banner .swiper-button-prev",
    },

    on: {
        init() {
            startProgress();
        },
        slideChangeTransitionStart() {
            startProgress();
        }
    }
});

function startProgress() {
    const bar = document.querySelector("#main_banner .progress");

    bar.style.transition = "none";
    bar.style.width = "0%";

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            bar.style.transition = "width 5s linear";
            bar.style.width = "100%";
        });
    });
}


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

    },
})


/* ------------------------------- 헤더 컨트롤 */

const header = document.querySelector("header");

function checkScroll() {
    if (window.scrollY > 300) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

/* -------------------------- 솔라코어 카데고리 컨트롤 */

const solarCate = document.querySelectorAll('.row2 .cate_btn')

console.log(solarCate)

solarCate[0].classList.add('active')

solarCate.forEach(solarBtn => {
    solarBtn.addEventListener('click',()=>{
        //모든 카테고리 액티브 된 것 지우기
        solarCate.forEach(item=>item.classList.remove('active'));
        //클릭한 것만 액티브
        solarBtn.classList.add('active')
    })
}) 

/* ------------------ 우먼스 카테고리 컨트롤 */
const wCate = document.querySelectorAll('.row3 .cate_btn')

console.log(wCate)

wCate[0].classList.add('active')

wCate.forEach(wBtn => {
    wBtn.addEventListener('click',()=>{
        //모든 카테고리 초기화
        wCate.forEach(witem=>witem.classList.remove('active'));
        //클릭한 것 활성화
        wBtn.classList.add('active')
    })
})


