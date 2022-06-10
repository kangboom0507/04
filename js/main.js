$(function(){
    //스크롤내릴때 header 올라가기
    $(window).scroll(function(){
        curr = $(window).scrollTop(); 

        if (curr > 0) {
            $(".header-area").addClass('top');
        } else {
            $('.header-area').removeClass('top');
        }
    })

    //ad-top
    var swiper = new Swiper(".ad-top", {
        loop:true,
        effect:'fade',
        
        autoplay: {                
            delay:3000,
            disableOnInteraction: false,
          },
    });

    $('.gnb-item.top').hover(function(e){
        e.preventDefault();
       
        $(this).find('.tops-wrap').show();
      },function(){
        $(this).find('.tops-wrap').hide();
      })


    var swiper = new Swiper(".new-wrap", {
        slidesPerView: 3.2,
        spaceBetween: 50,

        navigation: {
            nextEl: ".new-wrap .next",
            prevEl: ".new-wrap .prev",
          },
        })


        //warm
        var swiper = new Swiper(".list-box", {
            slidesPerView: 2.2,
            spaceBetween:32,
    
            // navigation: {
            //     nextEl: ".new-wrap .next",
            //     prevEl: ".new-wrap .prev",
            //   },
            })

        console.log(1)

        














        /**
 * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
 *
 * @version 1.0.0
 * @since 2022-01-16
 * @author 본인이름 (Nico)
 */
//from:전에있는걸 세팅
gsap.from('.visual-img img',10,{
  scale:1.2,
})
gsap.to('.visual-img img',{

  scrollTrigger:{ 
    trigger:".visual-img",
    start:"top top",  //기준의 시작위치, 윈도우 시작위치
    end:"bottom top", //기준의 끝위치, 윈도우 끝위치
    markers:true,
    scrub:1,  //부드러움 조절
  },
  // scale:2
  yPercent:20,
})



$('.img-scroll').each(function(){

  child = $(this).find('img');
  gsap.to(child,{

    scrollTrigger:{ 
      trigger:$(this),
      start:"top bottom",  //기준의 시작위치, 윈도우 시작위치
      end:"bottom top", //기준의 끝위치, 윈도우 끝위치
      markers:true, //주석시 기준사라짐
      scrub:1,  //부드러움 조절
    },
    // scale:2
    yPercent:-15,
  })
  
  
})


$('.chk-btn label').click(function(){
  $(this).toggleClass('active');
})


})



