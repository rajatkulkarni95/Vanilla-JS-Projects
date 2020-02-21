//Element Declarations
const container = document.querySelector(".container");
const movie = document.querySelector("#movie");
const seats = document.querySelectorAll(".seat");
const seat = document.querySelector(".seat");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const bronzeCount = document.querySelector("#bronze-count");
const silverCount = document.querySelector("#silver-count");
const goldCount = document.querySelector("#gold-count");

const baseTicketPrice = +movie.value;

//Selected Seats
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  let ticketPrice = 0;
  const selectedSeatCount = selectedSeats.length;

  const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  if (seatIndex < 20) {
    ticketPrice += baseTicketPrice;
  } else if (seatIndex < 44) {
    ticketPrice += baseTicketPrice * 1.2;
  } else {
    ticketPrice += baseTicketPrice * 1.5;
  }

  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

//Color Code Seats
const colorCode = document.addEventListener("DOMContentLoaded", () => {
  seats.forEach(value => {
    if (value.parentElement.matches(".row.bronze")) {
      value.className += " bronze";
    } else if (value.parentElement.matches(".row.silver")) {
      value.className += " silver";
    } else if (value.parentElement.matches(".row.gold")) {
      value.className += " gold";
    }
  });
});

//Change Option Event Listener
movie.addEventListener("change", e => {
  baseTicketPrice = +e.target.value;
});

//Click Event Listener
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateSelectedCount();
});
