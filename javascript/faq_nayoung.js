jQuery(document).ready(function(){
    $(".info li a").click(function(){
        var submenu = $(this).next("p");
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    })
    $(".left_submenu>li>a").click(function(){
        var inner = $(this).next("ul.account");
        if( inner.is(":visible") ){
            inner.slideUp();
        }else{
            inner.slideDown();
        }
    })

    $(".left_submenu>li>a").click(function(){
        var inner2 = $(this).next("ul.system");
        if( inner2.is(":visible") ){
            inner2.slideUp();
        }else{
            inner2.slideDown();
        }
    })

    $(".left_submenu>li>a").click(function(){
        var inner3 = $(this).next("ul.payment");
        if( inner3.is(":visible") ){
            inner3.slideUp();
        }else{
            inner3.slideDown();
        }
    })
    $(".left_submenu>li>a").click(function(){
        var inner4 = $(this).next("ul.report");
        if( inner4.is(":visible") ){
            inner4.slideUp();
        }else{
            inner4.slideDown();
        }
    })

   

    $('.navi > li').mouseover(function(){
        //$(this) : 현재 선택된 태그(요소)
        //find('.submenu') : 선택된 태그의 자식 태그 중 .submenu와 일치하는 태그를 찾아서 반환함. 만약에 children()을 사용할 경우 직계 자식 태그를 반환

        //stop() 현재 동작하고 있는 애니메이션 동작을 즉시 중단

        //slideDown(), slideUp() : jQuery 라이브러리에서 제공하는 함수로 슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함. 선택한 요소의 height 값을 낮추거나 높여가며 슬라이드 업 또는 다운 전환되게 하고, 이때 매개변수값(인수) 500은 0.5초를 의미

        $(this).find('.submenu').stop().slideDown(500); 
        //500ms = 0.5s(0.5초)
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
    
    })

    


    


    