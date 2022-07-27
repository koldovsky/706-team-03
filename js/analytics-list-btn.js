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


  function updateTitle(newTitle) {
    const titleName = document.querySelector(".analytics__title");
    titleName.innerHTML = newTitle;
  }

  function changeTitle() {
    const yourName = prompt("What is you name?")
    const yourAge = prompt("What is your age?");


    if (yourAge >= 18) {
      updateTitle("Welcome, " + yourName + ", you're on board!");
    } else {
      updateTitle(
        "It's a pity, " + yourName + ", our company will wait for you soon!"
      );
    }
  }

  let changeButton = document.querySelector(".analytics-btn");
  changeButton.addEventListener("click", changeTitle);

})();


