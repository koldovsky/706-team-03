(function () {

  const analyticList = [
    {
      id: "1",
      image: "img/analytics/widjets240.svg",
      title: "240+",
      text: "Widgets",
    },
    {
      id: "2",
      image: "img/analytics/services50.svg",
      title: "50+",
      text: "Services",
    },
    {
      id: "3",
      image: "img/analytics/styles100.svg",
      title: "100+",
      text: "Styles",
    },
    {
      id: "4",
      image: "img/analytics/requests.svg",
      title: "Unlimited",
      text: "Requests.",
    },
  ];

  function renderAnalytics(analyticList) {
    const analyticsContainer = document.querySelector('.analytics__icons');
    analyticsContainer.innerHTML = '';
    for (const product of analyticList) {
      analyticsContainer.innerHTML += `
            <div class="analytics__icons-widjets">
                <div class="analytics__icons-logo">
                     <img
                       src="${product.image}"
                       alt="${product.title}" />
                </div>
                <div class="analytics__icons-items">
                    <h3 class="analytics__icons-items-title">${product.title}</h3>
                    <p class="analytics__icons-items-text">${product.text}</p>
                </div>
            </div> `;
    }
  }

  renderAnalytics(analyticList);


  const secondHand = document.querySelector(".second-hand");
    const minsHand = document.querySelector(".min-hand");
    const hoursHand = document.querySelector(".hour-hand");

    function updateClock() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + 90;
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = ((hours / 60) * 360 )+ 90;
        hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    setInterval(updateClock, 1000);

})();


