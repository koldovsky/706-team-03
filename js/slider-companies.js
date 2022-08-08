(async function () {

    const response = await fetch('api/companies-slides.json');
    const data = await response.json();
    renderCarousel(data);

    function renderCarousel(slides) {
        const slideContainer = document.querySelector('.carousel-items');
        slideContainer.innerHTML = '';
        for (let i = 0; i < slides.length; i++) {
            let sliderImage = document.createElement('div');
            sliderImage.classList.add('item');
            sliderImage.innerHTML = `
            <img class="slider-item" src="${slides[i].image}" alt="${slides[i].title} logotype">
            `
            slideContainer.appendChild(sliderImage);
        }
    }

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            700: {
                items: 3,
            },
            800: {
                items: 4,
            },
            950: {
                items: 5,
            }
        }
    })

})();