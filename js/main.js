(function(){

    //gnb 메뉴 _ line

    $('.top_nav').each(function(i){
        $(this).attr({
            'data-num': i
        });
    }).mouseover(function(){
        var num = $(this).attr('data-num');
        
        // $('.gnb_txt').addClass('on');

        if(num == 0){
            $('.gnb_txt').eq(0).addClass('on');
        }else if(num == 1){
            $('.gnb_txt').eq(1).addClass('on');
        }else if(num == 2){
            $('.gnb_txt').eq(2).addClass('on');
        }else if(num == 3){
            $('.gnb_txt').eq(3).addClass('on');
        }
    
    }).mouseout(function(){
        var num = $(this).attr('data-num');
        
        $('.gnb_txt').removeClass('on');

    });


    // 햄버거 버튼 눌렀을 때 메뉴 생겨나기

    if (matchMedia("screen and (max-width:1300px)").matches) {

        const menuEl = document.querySelector('.mo_menu img');
        const navEl = document.querySelector('.mo_gnb');
    
        const clickEvent = () => {
            navEl.classList.toggle('mo_gnb_active');
            
        }

        menuEl.addEventListener('click', clickEvent);

        const topEl = document.querySelector('.mo_top_nav:nth-child(2)');
        const subEl = document.querySelector('.mo_sub_nav');

        const clickEvent2 = () => {
            subEl.classList.toggle('mo_sub_nav_active');
        }

        topEl.addEventListener('click', clickEvent2);

    }


    //atf additorial js

    var swiper = new Swiper(".swiper1", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 160,
          modifier: 1,
          slideShadows: false,
        },
        loop:true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }
      });


    //   mo_banner js

    var swiper = new Swiper(".swiper2", {
        slidesPerView: 2,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
   

})();