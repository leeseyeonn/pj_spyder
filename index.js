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

/* 아동 스키 */

const kidsSki = new Swiper('#collect_kids_ski', { 
    slidesPerView:5.3,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: "#collect_kids_ski .swiper-button-next",
        prevEl: "#collect_kids_ski .swiper-button-prev",
    },
    scrollbar: {
        el: "#collect_kids_ski .swiper-scrollbar",

    },
})

/* 스키 모음 */
const aSki = new Swiper('#collect_ski', { 
    slidesPerView:5.3,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: "#collect_ski .swiper-button-next",
        prevEl: "#collect_ski .swiper-button-prev",
    },
    scrollbar: {
        el: "#collect_ski .swiper-scrollbar",

    },
})


/* 셋업 */
const setUp = new Swiper('#collect_setup', { 
    slidesPerView:5.3,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: "#collect_setup .swiper-button-next",
        prevEl: "#collect_setup .swiper-button-prev",
    },
    scrollbar: {
        el: "#collect_setup .swiper-scrollbar",

    },
})


/* cp */
const cpCollab = new Swiper('#collect_cp', { 
    slidesPerView:5.3,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: "#collect_cp .swiper-button-next",
        prevEl: "#collect_cp .swiper-button-prev",
    },
    scrollbar: {
        el: "#collect_cp .swiper-scrollbar",

    },
})

/* 연말 선물 */
const endGift = new Swiper('#collect_gift', { 
    slidesPerView:5.3,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: "#collect_gift .swiper-button-next",
        prevEl: "#collect_gift .swiper-button-prev",
    },
    scrollbar: {
        el: "#collect_gift .swiper-scrollbar",

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
/* const wCate = document.querySelectorAll('.row3 .cate_btn')

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
 */

/* ================================================================== */
/* 버튼 클릭하면 슬라이드 바뀜 */



/* ================================================================== */
/* 버튼 클릭하면 슬라이드 바뀜 */

/* ================================================================== */
/* 버튼 클릭하면 슬라이드 바뀜 */

const titleWrapBg = document.querySelector('.collection_wrap .title_wrap')
const collectBtns = document.querySelectorAll('.collect_btn_1, .collect_btn_2, .collect_btn_3, .collect_btn_4, .collect_btn_5, .collect_btn_6')
const collectSlides = document.querySelectorAll('.collect_slide_1, .collect_slide_2, .collect_slide_3, .collect_slide_4, .collect_slide_5, .collect_slide_6')
const collectTitles = document.querySelectorAll('.collect_title_1, .collect_title_2, .collect_title_3, .collect_title_4, .collect_title_5, .collect_title_6')

// 초기값 설정 - 첫 번째 항목 활성화
function initCollection() {
    // 첫 번째 슬라이드만 보이기
    collectSlides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none'
    })
    
    // 첫 번째 타이틀만 보이기
    collectTitles.forEach((title, index) => {
        title.style.display = index === 0 ? 'block' : 'none'
    })
    
    // 첫 번째 배경 이미지 설정
    titleWrapBg.style.backgroundImage = 'url(./images/row4_collection/collection_bg_01.png)'
    
    // 첫 번째 버튼 활성화
    collectBtns[0].classList.add('active')
}

// 버튼 클릭 이벤트
collectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 클래스명에서 숫자 추출 (collect_btn_n에서 n 추출)
        const btnNumber = btn.className.match(/collect_btn_(\d)/)?.[1]
        
        if (!btnNumber) return
        
        // 모든 버튼 active 제거
        collectBtns.forEach(b => b.classList.remove('active'))
        // 클릭한 버튼 active 추가
        btn.classList.add('active')
        
        // 모든 슬라이드 숨기기
        collectSlides.forEach(slide => {
            slide.style.display = 'none'
        })
        // 해당 슬라이드만 보이기
        const targetSlide = document.querySelector(`.collect_slide_${btnNumber}`)
        if (targetSlide) {
            targetSlide.style.display = 'block'
        }
        
        // 모든 타이틀 숨기기
        collectTitles.forEach(title => {
            title.style.display = 'none'
        })
        // 해당 타이틀만 보이기
        const targetTitle = document.querySelector(`.collect_title_${btnNumber}`)
        if (targetTitle) {
            targetTitle.style.display = 'block'
        }
        
        // 배경 이미지 변경
        const bgNumber = btnNumber.padStart(2, '0') // 1 -> '01', 2 -> '02'
        titleWrapBg.style.backgroundImage = `url(./images/row4_collection/collection_bg_${bgNumber}.png)`
    })
})

// 초기화 실행
initCollection()