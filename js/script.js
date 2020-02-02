class Slider {
    constructor(slider) {
        this.slider = slider;
        this.inner = this.slider.querySelector(".slider__inner").children;
        this.totalSlides = this.inner.length;
        this.width = this.slider.clientWidth;
        this.nextBtn = this.slider.querySelector(".slider__next");
        this.prevBtn = this.slider.querySelector(".slider__prev");

        let that = this;
        this.nextBtn.addEventListener('click', () => { 
            that.next()
        });
        this.prevBtn.addEventListener('click', () => {
            that.prev()
        });
        this.index = 0;
        this.jumpWidth = 0;
        this.setWidth();
    }
    setWidth() {
        let totalWidth = 0;
        for (let i = 0; i < this.inner.length; i++) {
            this.inner[i].style.width = this.width + "px";
            totalWidth += this.width;
        }
        this.slider.querySelector(".slider__inner").style.width = totalWidth + "px";
    }
    next() {
        if (this.index == this.totalSlides - 1) {
            this.index = 0;
            this.jumpWidth = 0;
        }
        else {
            this.index++;
            this.jumpWidth += this.width;
        }

        this.slider.querySelector(".slider__inner").style.transform = `translateX(${-this.jumpWidth}px)`
    }
    prev() {
        if (this.index == 0) {
            this.index = this.totalSlides - 1;
            this.jumpWidth = this.width * (this.totalSlides - 1);
        }
        else {
            this.index--;
            this.jumpWidth -= this.width;
        }

        this.slider.querySelector(".slider__inner").style.transform = `translateX(${-this.jumpWidth}px)`
    }

}

const sliderOne = document.querySelector(".slider1");
const sliderTwo = document.querySelector(".slider2");

// creating object
var slider1 = new Slider(sliderOne)
var slider2 = new Slider(sliderTwo)









