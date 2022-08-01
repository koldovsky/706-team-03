(function () {
    const slides = [
        `<img class="slider-item" src="img/slider_logos/docker_logo.png" alt="Docker logotype">`,
        ` <img class="slider-item" src="img/slider_logos/google_logo.png" alt="Google logotype">`,
        `<img class="slider-item" src="img/slider_logos/ibm_logo.png" alt="IBM logotype">`,
        `<img class="slider-item" src="img/slider_logos/optimizely_logo.png" alt="Optimizely logotype">`,
        `<img class="slider-item" src="img/slider_logos/github_logo.png" alt="GitHub logotype">`,
        `<img class="slider-item" src="img/slider_logos/shutterstock_logo.png" alt="Shutterstock logotype">`
    ];

    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.carousel-items');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 500) {
            const twoSlides = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[twoSlides];
            if (window.innerWidth > 700) {
                const threeSlides = twoSlides + 1 >= slides.length ? 0 : twoSlides + 1;
                slideContainer.innerHTML += slides[threeSlides];
                if (window.innerWidth > 1000) {
                    const fourSlides = threeSlides + 1 >= slides.length ? 0 : threeSlides + 1;
                    slideContainer.innerHTML += slides[fourSlides];
                }
            }
        }
    }

    const NEXT_BTN = document.querySelector('.arrow-next');
    const PREV_BTN = document.querySelector('.arrow-prev');

    NEXT_BTN.addEventListener('click', nextSlide);
    PREV_BTN.addEventListener('click', prevSlide);

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }

    window.addEventListener('resize', renderCarousel);


    // setInterval(nextSlide, 5000);

    renderCarousel();
})()