$("document").ready(function(){
    
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        loop: true,

        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade"
    });



    //선택한 색상 표시
    $(".color-btn-wrap > div > div > div > div:nth-child(1)").addClass("on")
    
    $(".color-btn-wrap > div > div > .shirt > div").click(function(){
        $(".color-btn-wrap > div > div > .shirt > div").removeClass("on");
    })
    $(".color-btn-wrap > div > div > .pants > div").click(function(){
        $(".color-btn-wrap > div > div > .pants > div").removeClass("on");
    })
    $(".color-btn-wrap > div > div > .shoes > div").click(function(){
        $(".color-btn-wrap > div > div > .shoes > div").removeClass("on");
    })
    $(".color-btn-wrap > div > div > .bag > div").click(function(){
        $(".color-btn-wrap > div > div > .bag > div").removeClass("on");
    })
    $(".color-btn-wrap > div > div > div > div").click(function(){
        $(this).addClass("on");
    })


    //리셋 버튼
    $(".color-btn-wrap .reset").click(function(){
        $(".color-btn-wrap > div > div > div > div").removeClass("on");
        $(".color-btn-wrap > div > div > div > div:nth-child(1)").addClass("on");
        $(".photo-wrap div > img").fadeOut("on");
    })



    //shirt 버튼
    $(".btn-wrap .shirt > div").click(function(){
        $(".photo-wrap .shirt > img").fadeOut("on");
    })

    $(".btn-wrap .shirt .black").click(function(){
        $(".shirt .b").fadeIn("on");
    })
    $(".btn-wrap .shirt .carmel").click(function(){
        $(".shirt .c").fadeIn("on");
    })
    $(".btn-wrap .shirt .khaki").click(function(){
        $(".shirt .k").fadeIn("on");
    })
    $(".btn-wrap .shirt .navy").click(function(){
        $(".shirt .n").fadeIn("on");
    })
    $(".btn-wrap .shirt .blue").click(function(){
        $(".shirt .bl").fadeIn("on");
    })
    $(".btn-wrap .shirt .pink").click(function(){
        $(".shirt .p").fadeIn("on");
    })


    //pants 버튼
    $(".btn-wrap .pants > div").click(function(){
        $(".photo-wrap .pants > img").fadeOut("on");
    })

    $(".btn-wrap .pants .black").click(function(){
        $(".pants .b").fadeIn("on");
    })
    $(".btn-wrap .pants .carmel").click(function(){
        $(".pants .c").fadeIn("on");
    })
    $(".btn-wrap .pants .khaki").click(function(){
        $(".pants .k").fadeIn("on");
    })
    $(".btn-wrap .pants .navy").click(function(){
        $(".pants .n").fadeIn("on");
    })
    $(".btn-wrap .pants .blue").click(function(){
        $(".pants .bl").fadeIn("on");
    })
    $(".btn-wrap .pants .pink").click(function(){
        $(".pants .p").fadeIn("on");
    })

    //bag 버튼
    $(".btn-wrap .bag > div").click(function(){
        $(".photo-wrap .bag > img").fadeOut("on");
    })

    $(".btn-wrap .bag .white").click(function(){
        $(".bag .w").fadeIn("on");
    })
    $(".btn-wrap .bag .black").click(function(){
        $(".bag .b").fadeIn("on");
    })
    $(".btn-wrap .bag .carmel").click(function(){
        $(".bag .c").fadeIn("on");
    })
    $(".btn-wrap .bag .ivory").click(function(){
        $(".bag .i").fadeIn("on");
    })
    $(".btn-wrap .bag .navy").click(function(){
        $(".bag .n").fadeIn("on");
    })
    $(".btn-wrap .bag .pink").click(function(){
        $(".bag .p").fadeIn("on");
    })

    //shoes 버튼
    $(".btn-wrap .shoes > div").click(function(){
        $(".photo-wrap .shoes > img").fadeOut("on");
    })

    $(".btn-wrap .shoes .black").click(function(){
        $(".shoes .b").fadeIn("on");
    })
    $(".btn-wrap .shoes .brown").click(function(){
        $(".shoes .br").fadeIn("on");
    })
    $(".btn-wrap .shoes .silver").click(function(){
        $(".shoes .s").fadeIn("on");
    })
    $(".btn-wrap .shoes .burgundy").click(function(){
        $(".shoes .bu").fadeIn("on");
    })


    const pTag1 = document.querySelector('.first-parallel')
    const textArr1 = 'PRADA PRADA PRADA PRADA PRADA PRADA PRADA PRADA PRADA PRADA PRADA PRADA'.split(' ')
    let count1 = 0

    initTexts(pTag1, textArr1)

    function initTexts(element, textArray) {
        textArray.push(...textArray)
        for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
        }
    }

    function marqueeText(count, element, direction) {
        if (count > element.scrollWidth / 2) {
        element.style.transform = `translate3d(0, 0, 0)`
        count = 0
        }
      element.style.transform = `translate3d(${direction * count}px, 0, 0)`

        return count
    }
    
    function animate() {
        count1++
        count1 = marqueeText(count1, pTag1, -1)
        window.requestAnimationFrame(animate)
    }
    
    function scrollHandler() {
        count1 += 15
    }
    
    window.addEventListener('scroll', scrollHandler)
    animate()



    
    AOS.init();
            new WOW({
                animateClass: "animate__animated"
            }).init();
})