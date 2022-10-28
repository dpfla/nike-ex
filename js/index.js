$(function() {
    let windowWidth;
    $(window).resize(function () {
        windowWidth = $(this).width();

        if(windowWidth <= 1024){
            $(".main-menu").off("mouseover");
            $(".main-menu").off("mouseout");
            $("nav").prependTo(".h-top");
            $(".jordan-logo").find("img").attr("src", "images/AIR-JORDAN-LOGO-b.svg");
        } else{
            $("nav").appendTo("header");
            $(".jordan-logo").find("img").attr("src", "images/AIR-JORDAN-LOGO.svg");
            $(".main-menu").on({
                mouseenter: function () {
                    $(".sub-menu, .sub-bg").stop().show();
                },
                mouseleave: function () {
                    $(".sub-menu, .sub-bg").stop().hide();
                }
            });
        }
    });//resize 이벤트 끝
    $(window).trigger("resize");
    if(windowWidth <= 480){
        $(".main-01 img").attr("src", "images/M-01-mobile.png");
        $(".main-02 img").attr("src", "images/M-02-mobile.png");
        $(".main-03 img").attr("src", "images/M-03-mobile.png");
    } else{
        $(".main-01 img").attr("src", "images/M-01.png");
        $(".main-02 img").attr("src", "images/M-02.png");
        $(".main-03 img").attr("src", "images/M-03.png");
    }

    //Swiper slide
    //                new Swiper(슬라이드로 쓸 곳, 객체 설정)
    let swiperSlide = new Swiper(".Featured-slide", {
        //디폴트: 모바일
        slidesPerView: "auto",
        spaceBetween: 8,
        pagination: {
            el: ".f-pager",
            clickable: true,
            type:"fraction"
        },
        navigation: {
            nextEl: ".f-next",
            prevEl: ".f-prev"
        },
        breakpoints:{ //화면 넓이에 따라 레이아웃 변경
            1025: {
                slidesPerView:3,
                spaceBetween: 24
            },
            480: {
                slidesPerView: "auto",
                spaceBetween:16
            }
        }
    });  //스와이퍼 플러그인 종료

    //햄버거메뉴 클릭
    $(".menu-btn").click(function () {
        
        $(".index-wrap").css("filter", "blur(10px)");
        $("body, html").css({
            height: "100vh",
            overflow: "hidden"
        });
        $(".menu-area").show();
        $(".h-top").animate({
            right: "0%"
        }, "fast");
    });

    $(".menu-area").mouseup(function (event) {
        if($(this).has(event.target).length === 0){
            //".menu-area"의 정확한 영역을 클릭했는지 확인 
            $(".index-wrap").css("filter", "blur(0px)");
            $("body, html").css({
                height: "auto",
                overflow: "visible"
            });
            $(".h-top").animate({
                right: "-100%"
            }, "fast", function () {
                $(".menu-area").hide();
            });
        }
    });

    $(".main-menu > li > a").click(function () {
        $(this).siblings(".sub-menu").animate({  //형제중에 찾기
            left: "0%"
        }, "fast");
    });
    $(".all > a").click(function () {
        $(this).parents(".sub-menu").animate({
            left: "150%"
        })
    });
});