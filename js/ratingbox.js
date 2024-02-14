ratingbox.js
// Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll('.stars i');

// Loop through the "stars" NodeList
stars.forEach((item, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  item.addEventListener('click', () => {
    // Loop through the "stars" NodeList again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      if (index1 >= index2) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  });
});


let pop_ratingBox = document.querySelector('.rating-box');

window.addEventListener("load", function () {
  setTimeout(
    function open(event) {
      pop_ratingBox.classList.add("open-rating-Box");
    },
    2000
  )
});

// for closing rating box
function closePopup() {
  pop_ratingBox.classList.remove("open-rating-Box");
}

function post() {
  pop_ratingBox.classList.remove("open-rating-Box");
}
