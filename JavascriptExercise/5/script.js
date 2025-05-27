class Event {
    constructor(name, date, availableSeats) {
        this.name = name;
        this.date = date;
        this.availableSeats = availableSeats;
    }

    checkAvailability(seatsRequested) {
        return seatsRequested > 0 && seatsRequested <= this.availableSeats;
    }

    bookSeats(seatsRequested) {
        if (this.checkAvailability(seatsRequested)) {
            this.availableSeats -= seatsRequested;
            return `Successfully booked ${seatsRequested} seats!`;
        } else {
            return "Not enough seats available!";
        }
    }
}

// Creating an event instance
const event = new Event("Tech Conference", "2025-06-15", 100);

// Updating the DOM with event details
document.getElementById("event-name").textContent = event.name;
document.getElementById("event-date").textContent = event.date;
document.getElementById("available-seats").textContent = event.availableSeats;

// Function to handle booking seats
function bookSeats() {
    const seatsRequested = parseInt(document.getElementById("seats-requested").value);
    const message = event.bookSeats(seatsRequested);
    
    document.getElementById("status-message").textContent = message;
    document.getElementById("available-seats").textContent = event.availableSeats;
}
