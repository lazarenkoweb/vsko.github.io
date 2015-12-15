(function() {
    var Slider = function(selector, options) {
        var __self = this,
            sliderNode = document.querySelector(selector),
            sliderImagesNode = sliderNode.querySelector('.images .wrapper'),
            prevSliderNode = sliderNode.querySelector('.navigation .prev'),
            nextSliderNode = sliderNode.querySelector('.navigation .next'),
            paginationNode = sliderNode.querySelector('.navigation .pagination'),
            imagesCount = sliderImagesNode.children.length,
            currentSlideIndex = options.currentSlide || 0;

        this.prevSlide = function() {
            if (currentSlideIndex == 0) {
                currentSlideIndex = imagesCount-1;
                return;
            }
            currentSlideIndex--;
        };

        this.nextSlide = function() {
            if (currentSlideIndex == imagesCount-1) {
                currentSlideIndex = 0;
                return;
            }
            currentSlideIndex++;
        };

        this.__render = function() {
            var directionStyle = options.direction === 'vertical' ? 'marginTop' : 'marginLeft',
                slideSize = sliderImagesNode.offsetParent[options.direction === 'vertical' ? 'offsetHeight' : 'offsetWidth'];
            sliderImagesNode.style[directionStyle] = -(currentSlideIndex * slideSize) + 'px';

            if (paginationNode.querySelector('.active')) {
                paginationNode.querySelector('.active').classList.remove('active');
            }

            paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
        };

        prevSliderNode.onclick = function(e) {
            e.preventDefault();
            __self.prevSlide();
            __self.__render();
            console.log(this);
        };

        nextSliderNode.onclick = function(e) {
            e.preventDefault();
            __self.nextSlide();
            __self.__render();
            console.log(this);
        };

        paginationNode.onclick = function(e) {
            e.preventDefault();

            var linkItem = e.target;
            if (linkItem.tagName !== 'A') { return; }

            currentSlideIndex = +(linkItem.dataset.sliderItem);

            __self.__render();
        };

        for (var i=0; i<imagesCount; i++) {
            var slideItemPage = document.createElement('li'),
                slideItemLink = document.createElement('a'),
                slideItemText = document.createTextNode(i+1);

            slideItemPage.classList.add('item');
            slideItemLink.setAttribute('href', '#');
            slideItemLink.dataset.sliderItem = i;

            slideItemLink.appendChild(slideItemText);
            slideItemPage.appendChild(slideItemLink);
            paginationNode.appendChild(slideItemPage);
        }

        if (options.direction == 'vertical') {
            sliderImagesNode.style.whiteSpace = 'normal';
        }

        __self.__render();

        sliderImagesNode.style.transition = 'margin .5s ease-out';
    };

    window.Slider = Slider;
})();