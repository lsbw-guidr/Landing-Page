// const tab = document.querySelector(".tab");

// tab.addEventListener("click", e => {
//     console.log(`Work button fired a click event!`);
// });


const card = document.querySelector('.card');
card.addEventListener('click', e => {
    // console.log(`Work button fired a click event!`);
    // ALL about stopping events from bubbling
    e.stopPropagation();

});