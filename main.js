// 엄격모드 적용 : 호이스팅 개선
"use strict";

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