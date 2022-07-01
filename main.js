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

// aboutme
// about 섹션에 들어오면 skills에 대한 숙련도 wave 활성화
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

// skills
// skills 게이지 표현
document.addEventListener('scroll', ()=> {
    const skills = document.querySelector('#skills');
    const skillValue = document.querySelectorAll('.skill__value');
    const skillsArea = skills.getBoundingClientRect(); // skills에 해당하는 위치를 가져오기
    const range = skillsArea.height + skillsArea.top;

    if(range >= 0 && range <= (skillsArea.height+200) ){
        for(var i of skillValue){
            i.classList.add('active');
        }
    }else {
        for(var i of skillValue){
            i.classList.remove('active');
        }
    }
});


// project img slider
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const projectImgs = document.querySelector('.project__imgs');
const projectImgIdx = projectImgs.childElementCount; // 프로젝트 이미지수를 센것
const regex = /[^0-9]/g;// 숫자만 파싱하는 것 : 그게 뭔데?
// 프로젝트이미지들(ul)가로길이
const projectImgsWidth = projectImgs.style.width = `${projectImgIdx*400}px`;
// 프로젝트이미지가로길이의 값 중 숫자만 파싱한다. (측정하기 위해)
const projectImgsWidthNumber = projectImgsWidth.replace(regex,"");

// 이미지 카운트 태그에 이미지 숫자 넣기
const imgCount = document.querySelector(".project__imgCount");
let curImgIdx = 1;//현재 이미지 인덱스
imgCount.innerHTML = ` ${curImgIdx} / ${projectImgIdx}`;

next.addEventListener('click', ()=>{
    // 현재 프로젝트이미지ul의 translate값을 가져온다.
    // tanslate으로 img를 슬라이드하기 때문이다.
    const currentTranslate = Number(projectImgs.style.transform.replace(regex,""));
    // 만일 현재 translate값이 프로젝트이미지ul-400보다 작으면 첫 이미지의 위치로 돌아간다.
    // -400을 해주는 이유는 마지막 이미지에서 tanslate은 자신의 카드길이를 뺀 값이다. 그래서 마지막 자신의 위치 값을 빼준다.
    if(currentTranslate >= projectImgsWidthNumber-400 ){
        projectImgs.style.transform = `translate(0px)`;
        curImgIdx = 1;
    }else{
        projectImgs.style.transform = `translate(${-(currentTranslate+400)}px)`;
        curImgIdx++;
    }
    // 현재이미지인덱스를 증감후 마지막에 할당
    imgCount.innerHTML = ` ${curImgIdx} / ${projectImgIdx}`; 
});

prev.addEventListener('click', ()=>{
    const currentTranslate = Number(projectImgs.style.transform.replace(regex,""));

    if(currentTranslate == 0){
        projectImgs.style.transform = `translate(${-(projectImgsWidthNumber-400)}px)`;
        curImgIdx = projectImgIdx;
    }else{
        projectImgs.style.transform = `translate(${-(currentTranslate-400)}px)`;
        curImgIdx--;
    }
    imgCount.innerHTML = ` ${curImgIdx} / ${projectImgIdx}`;
});


// arrow up visible
const arrow = document.querySelector('#arrowUp');
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight/2){
        arrow.classList.add('visible');
    }else{
        arrow.classList.remove('visible');
    }
});

arrow.addEventListener('click',()=>{
    home.scrollIntoView({behavior:'smooth'});
});