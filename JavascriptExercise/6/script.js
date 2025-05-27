// Array to store community events
let events = [
    { name: "Music Concert", type: "music" },
    { name: "Art Exhibition", type: "art" },
    { name: "Food Festival", type: "food" }
];

// Function to add a new event dynamically
function addEvent() {
    const newEvent = { name: "Jazz Night", type: "music" };
    events.push(newEvent);
    displayEvents();
}

// Function to display all events
function displayEvents() {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = events.map(event => 
        `<div class="event-card">${event.name}</div>`).join('');
}

// Load events on page startup
document.addEventListener("DOMContentLoaded", displayEvents);
