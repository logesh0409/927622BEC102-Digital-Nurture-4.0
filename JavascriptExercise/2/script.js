// Event details
const eventName = "Music Concert";
const eventDate = "2023-12-01";
let availableSeats = 100;

// Updating UI on page load
document.getElementById("event-title").textContent = eventName;
document.getElementById("event-date").textContent = `Date: ${eventDate}`;
document.getElementById("available-seats").textContent = `Available Seats: ${availableSeats}`;

// Register a seat
function registerSeat() {
    if (availableSeats > 0) {
        availableSeats--;
        updateSeatCount();
        alert("Seat registered successfully!");
    } else {
        alert("No seats available.");
    }
}

// Cancel registration
function cancelRegistration() {
    availableSeats++;
    updateSeatCount();
    alert("Registration canceled.");
}

// Function to update seat count in UI
function updateSeatCount() {
    document.getElementById("available-seats").textContent = `Available Seats: ${availableSeats}`;
}
