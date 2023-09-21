//swiper_slide
const swiper = new Swiper('.slider_main', {
  
  // Optional parameters
  loop: true,
  autoplay:{
  delay: 2500,
  disableOnInteraction: false,
  
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const swiper2 = new Swiper('.slide_shortcut', {
  // Optional parameters
  loop: true,
  slidesPerView: 9,
  spaceBetween: 10,
  slidesPerGroup: 9,

  pagination: {
    el: '.swiper-pagination2',
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
});





//gnb 슬라이드메뉴
const gnbBtn = document.querySelector('.gnbBtnTrigger');
const gnb = document.querySelector('.gnb');
const dark = document.querySelector('.dark');

gnbBtn.onclick = () =>{
  gnb.style='transform:translateX(0)';
  dark.style.display='block'
}
dark.onclick = () =>{
  gnb.style ='transform:translateX(-100%)';
  dark.style.display ='none'
  loginPop.style.display = 'none';  
}


//gnb 내의 서브메뉴 열고 닫기//

const btn_subs = document.querySelectorAll('.btn_sub') //버튼
const btn_subArrow = document.querySelectorAll('.btn_sub span') //화살표
const list_sub = document.querySelectorAll('.list_sub') //서브

btn_subs.forEach((item,index)=>{
  item.onclick = function(){
    btn_subArrow[index].classList.toggle('on');

    if(btn_subArrow[index].classList.contains('on')){
      list_sub[index].style.height = 'auto' 
    } else {
      list_sub[index].style.height = '0' 
    }
  }

})




//로그인팝업
const log = document.querySelectorAll('.log')
const loginPop = document.querySelector('.loginPop')
const loginPopClose = document.querySelector('.close')
const talk_btn = document.querySelector('.talk_btn')

//로그인 팝업-열기
log.forEach((logBtn)=>{
  logBtn.addEventListener('click',()=>{
    loginPop.style.display ='block';
    dark.style.display='block'
    gnb.style ='transform:translateX(-100%)';
  })
})

//로그인 팝업-닫기버튼
loginPopClose.addEventListener('click',()=>{
  loginPop.style.display = 'none';  
  dark.style.display ='none'
})

//로그인 팝업 -링크
talk_btn.addEventListener('click',()=>{
  window.location = 'https://accounts.kakao.com/'
})
