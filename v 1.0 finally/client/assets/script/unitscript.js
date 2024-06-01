

let cardButton = [...document.getElementsByClassName('moreDetailed')];
cardButton.forEach(function (element) {
    element.addEventListener("click", (event) => {
        let arrivingCard = event.target.parentElement;
        let infoRoute = arrivingCard.lastElementChild;
        infoRoute.style.display = "flex";
    });
});

let btnClose = [...document.getElementsByClassName('btnClose')];
btnClose.forEach(function (element) {
    element.addEventListener("click", (event) => {
        let arrivingCardClose = event.target.parentElement;
        arrivingCardClose.style.display = "none";
    });
});