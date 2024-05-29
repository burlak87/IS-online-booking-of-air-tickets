let btnBooking = [...document.getElementsByClassName('btnBooking')];
btnBooking.forEach( function(element) {
    element.addEventListener("click", () => {
        document.querySelector('dialog').toggleAttribute('open');
    });
})