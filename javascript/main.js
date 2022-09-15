// 엄격모드 적용 : 호이스팅 개선
"use strict";

import Slider from './slider.js';

// 반응형때 토글버튼으로 메뉴 활성화하기
const navbarMenuBtn = document.querySelector(".navbar__menuBtn");
const navbarMenu = document.querySelector(".navbar__menu");
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const contactBtn = document.querySelector(".profile__contact");
const arrow = document.querySelector("#arrowUp");
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

const imgSlider = new Slider('.prev', ".next", ".project__imgs", ".project__imgCount");
const imgSlider1 = new Slider('.prev[data-index="1"]', ".next[data-index='1']", ".project__imgs[data-index='1']", ".project__imgCount[data-index='1']");
const imgSlider2 = new Slider('.prev[data-index="2"]', ".next[data-index='2']", ".project__imgs[data-index='2']", ".project__imgCount[data-index='2']");

navbarMenuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  navbar.classList.add("navbar--dark");
});

// 스크롤시 navbar의 배경색 변경
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
    if (navbarMenu.className == 'navbar__menu active') navbarMenu.classList.remove("active");
  }
});

// menu안에 요소를 클릭시 해당 요소위치로 이동
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  // 스크롤을 스무스하게 이동
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });

  navbarMenu.classList.toggle("active");
});

//home
// contact 버튼으로 contact섹션으로 이동
contactBtn.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// aboutme
// about 섹션에 들어오면 skills에 대한 숙련도 wave 활성화
document.addEventListener("scroll", () => {
  const about = document.querySelector("#about");
  const skillIcon = document.querySelectorAll(".skill__icon");
  const skillPercent = document.querySelectorAll(".skill__icon__percent");
  const aboutArea = about.getBoundingClientRect(); // skills에 해당하는 위치를 가져오기
  const range = aboutArea.height + aboutArea.top;
  const htmlwave = document.querySelector(".skill__icon__wave.html");
  const cssWave = document.querySelector(".skill__icon__wave.css");
  const jsWave = document.querySelector(".skill__icon__wave.js");

  if (range >= 0 && range <= aboutArea.height + 200) {
    htmlwave.classList.add("waveOn");
    cssWave.classList.add("waveOn");
    jsWave.classList.add("waveOn");

    for (var i of skillIcon) {
      i.classList.add("active");
    }
    for (var i of skillPercent) {
      i.classList.add("active");
    }
  } else {
    htmlwave.classList.remove("waveOn");
    cssWave.classList.remove("waveOn");
    jsWave.classList.remove("waveOn");
    for (var i of skillIcon) {
      i.classList.remove("active");
    }
    for (var i of skillPercent) {
      i.classList.remove("active");
    }
  }
});

// skills
// skills 게이지 표현
document.addEventListener("scroll", () => {
  const skills = document.querySelector("#skills");
  const skillValue = document.querySelectorAll(".skill__value");
  const skillsArea = skills.getBoundingClientRect(); // skills에 해당하는 위치를 가져오기
  const range = skillsArea.height + skillsArea.top;

  if (range >= 0 && range <= skillsArea.height + 200) {
    for (var i of skillValue) {
      i.classList.add("active");
    }
  } else {
    for (var i of skillValue) {
      i.classList.remove("active");
    }
  }
});

// arrow up visible
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
});

arrow.addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
});
