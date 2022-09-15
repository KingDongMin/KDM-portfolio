'use strict'

const regex = /[^0-9]/g;

export default class Slider {
    constructor(PREV, NEXT, Images, ImgCount) {
        this.prevName = PREV;
        this.nextName = NEXT;
        this.imgsName = Images;
        this.imgsCntName = ImgCount;

        this.prev = document.querySelector(this.prevName);
        this.next = document.querySelector(this.nextName);
        this.projectImgs = document.querySelector(this.imgsName);
        this.projectImgIdx = this.projectImgs.childElementCount;
        this.projectImgsWidth = (this.projectImgs.style.width = `${this.projectImgIdx * 400}px`);
        this.projectImgsWidthNumber = this.projectImgsWidth.replace(regex, "");

        this.imgCount = document.querySelector(this.imgsCntName);
        this.curImgIdx = 1;
        this.imgCount.innerHTML = ` ${this.curImgIdx} / ${this.projectImgIdx}`;

        this.next.addEventListener("click", () => { this.nextImg(); });
        this.prev.addEventListener("click", () => { this.prevImg(); });
    }

    nextImg() {
        this.currentTranslate = Number(this.projectImgs.style.transform.replace(regex, ""));
        if (this.currentTranslate >= this.projectImgsWidthNumber - 400) {
            this.projectImgs.style.transform = `translate(0px)`;
            this.curImgIdx = 1;
        } else {
            this.projectImgs.style.transform = `translate(${-(this.currentTranslate + 400)}px)`;
            this.curImgIdx++;
        }
        this.imgCount.innerHTML = ` ${this.curImgIdx} / ${this.projectImgIdx}`;
    }

    prevImg() {
        this.currentTranslate = Number(projectImgs.style.transform.replace(regex, ""));

        if (this.currentTranslate == 0) {
            this.projectImgs.style.transform = `translate(${-(
                this.projectImgsWidthNumber - 400
            )}px)`;
            this.curImgIdx = this.projectImgIdx;
        } else {
            this.projectImgs.style.transform = `translate(${-(this.currentTranslate - 400)}px)`;
            this.curImgIdx--;
        }
        this.imgCount.innerHTML = ` ${this.curImgIdx} / ${this.projectImgIdx}`;
    }

}