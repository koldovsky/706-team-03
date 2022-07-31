(function () {

    const slides = [
        `<div class="management__slide">
          <img src="img/website_management/website_menagement.png" alt="Illustration site addres">
        </div>`,
        `<div class="management__slide">
          <img src="img/website_management/content-management-color.png" alt="change color in your website">
        </div>`,
        `<div class="management__slide">
          <img src="img/website_management/content-management-systems.jpeg" alt="system in your website">
        </div>`,
    ];

    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.management-carousel__slide');
        slideContainer.innerHTML = slides [currentSlideIdx];
    }

    function next () {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }
    function prev () {
      currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length -1 : currentSlideIdx - 1;
      renderCarousel();
    }
    setInterval(next, 3000);
    const nextButton = document.querySelector(".management-carousel__btn-next");
    nextButton.addEventListener("click", next);

    const prevButton = document.querySelector(".management-carousel__btn-prev");
    prevButton.addEventListener("click", prev )

    renderCarousel();


})();