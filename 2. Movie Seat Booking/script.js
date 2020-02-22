//Element Declarations
const container = document.querySelector(".container");
const movie = document.querySelector("#movie");
const seats = document.querySelectorAll(".seat");
const seat = document.querySelector(".seat");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const bronzePrice = document.querySelector("#bronze-price");
const silverPrice = document.querySelector("#silver-price");
const goldPrice = document.querySelector("#gold-price");
const bronzeCount = document.querySelector("#bronze-count");
const silverCount = document.querySelector("#silver-count");
const goldCount = document.querySelector("#gold-count");

let baseTicketPrice = +movie.value;
updateTicketPrice(baseTicketPrice);

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

  goldCount.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

function updateTicketPrice(baseTicketPrice) {
  bronzePrice.innerText = `($${baseTicketPrice})`;
  silverPrice.innerText = `($${Math.round(baseTicketPrice * 1.2)})`;
  goldPrice.innerText = `($${Math.round(baseTicketPrice * 1.5)})`;
}

//Color Code Seats
const colorCode = document.addEventListener("DOMContentLoaded", () => {
  seats.forEach(value => {
    if (value.parentElement.id.match("bronze-row")) {
      value.className += " bronze";
    } else if (value.parentElement.id.match("silver-row")) {
      value.className += " silver";
    } else if (value.parentElement.id.match("gold-row")) {
      value.className += " gold";
    }
  });
});

//Change Option Event Listener
movie.addEventListener("change", e => {
  baseTicketPrice = +e.target.value;
  updateTicketPrice(baseTicketPrice);
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
