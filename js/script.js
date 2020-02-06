class Slider {
    constructor(slider) {
        this.slider = document.querySelector(slider.slider)
        this.inner = this.slider.querySelector(".slider__inner").children
        this.totalSlides = this.inner.length;

        this.direction = slider.direction

        this.width = this.direction == 'X' ? this.slider.clientWidth : this.slider.clientHeight
        this.nextBtn = this.slider.querySelector(".slider__next")
        this.prevBtn = this.slider.querySelector(".slider__prev")

        this.style = this.direction == 'X' ? 'width' : 'height'

        let that = this;
        this.nextBtn.addEventListener('click', () => {
            that.next()
        });
        this.prevBtn.addEventListener('click', () => {
            that.prev()
        });
        this.index = 0
        this.jumpWidth = 0
        this.setWidth()
        slider.autoplay ? this.autoplay : false

        // this.autoplayStop = slider.autoplay ? this.autoplay() : false;

        this.autoplayTime = slider.autoplayTime

        if (slider.autoplay) {
           this.autoplay() 
        }

        this.slider.addEventListener('mouseover', () => clearInterval(this.autoplayStart))
        this.slider.addEventListener('mouseout', () => this.autoplay())

        


    }
    setWidth() {
        let totalWidth = 0;
        for (let i = 0; i < this.inner.length; i++) {
            this.inner[i].style = `${this.style}:${this.width}px`;
            totalWidth += this.width;
        }
        this.slider.querySelector(".slider__inner").style = `${this.style}:${totalWidth}px`;
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

        this.slider.querySelector(".slider__inner").style.transform = `translate${this.direction}(${-this.jumpWidth}px)`

        //    return this.autoplay = clearTimeout(this.autoplayStop)
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

        this.slider.querySelector(".slider__inner").style.transform = `translate${this.direction}(${-this.jumpWidth}px)`

        // this.autoplay = false;

    }

    autoplay() {
        this.autoplayStart = setInterval(() => this.next(), this.autoplayTime)
    }


}



var slider1 = new Slider({
    slider: '.slider1',
    direction: 'X',
    autoplay: true,
    autoplayTime: 2000
})

var slider2 = new Slider({
    slider: '.slider2',
    direction: 'Y',
    autoplay: true,
    autoplayTime: 2000
})







// Надо добавить появление кнопок
// append js
// ParentNode.append()  https://developer.mozilla.org/ru/docs/Web/API/ParentNode/append
// node.append(...nodes or strings) https://learn.javascript.ru/modifying-document
// document.createElement https://developer.mozilla.org/ru/docs/DOM/document.createElement
