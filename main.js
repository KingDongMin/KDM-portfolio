// 엄격모드 적용 : 호이스팅 개선
"use strict";

// 반응형때 토글버튼으로 메뉴 활성화하기
const navbarMenuBtn = document.querySelector('.navbar__menuBtn');
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenuBtn.addEventListener("click", ()=>{
    navbarMenu.classList.toggle('active');
    navbar.classList.add('navbar--dark');
})

// 스크롤시 navbar의 배경색 변경
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// menu안에 요소를 클릭시 해당 요소위치로 이동
navbarMenu.addEventListener('click', (event)=>{
    console.log(event.target.dataset.link); //링크 테스트
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){ 
        return;
    }
    // 스크롤을 스무스하게 이동
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});

    navbarMenu.classList.toggle('active');
})

//home
// contact 버튼으로 contact섹션으로 이동
const contactBtn = document.querySelector('.profile__contact');
contactBtn.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});
})

document.addEventListener('scroll', ()=> {
    const about = document.querySelector('#about');
    const skillIcon = document.querySelectorAll('.skill__icon');
    const skillPercent = document.querySelectorAll('.skill__icon__percent');
    const aboutArea = about.getBoundingClientRect(); // skills에 해당하는 위치를 가져오기
    const range = aboutArea.height + aboutArea.top;
    const htmlwave = document.querySelector('.skill__icon__wave.html');
    const cssWave = document.querySelector('.skill__icon__wave.css');
    const jsWave = document.querySelector('.skill__icon__wave.js')

    if(range >= 0 && range <= (aboutArea.height+200) ){
        htmlwave.classList.add('waveOn');
        cssWave.classList.add('waveOn');
        jsWave.classList.add('waveOn');

        for(var i of skillIcon){
            i.classList.add('active');
        }
        for(var i of skillPercent){
            i.classList.add('active');
        }

    }else {
        htmlwave.classList.remove('waveOn');
        cssWave.classList.remove('waveOn');
        jsWave.classList.remove('waveOn');
        for(var i of skillIcon){
            i.classList.remove('active');
        }
        for(var i of skillPercent){
            i.classList.remove('active');
        }
    }
})