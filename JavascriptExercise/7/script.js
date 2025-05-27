// Sample data for events
const events = [
  { id: 1, name: 'Event 1', date: '2025-06-01', seats: 5 },
  { id: 2, name: 'Event 2', date: '2025-06-05', seats: 10 },
  { id: 3, name: 'Event 3', date: '2025-06-10', seats: 3 }
];

// Function to render events
function renderEvents() {
    const eventContainer = document.querySelector('#event-container');
    eventContainer.innerHTML = ''; // Clear existing events

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Available Seats: <span id="seats-${event.id}">${event.seats}</span></p>
            <button onclick="registerEvent(${event.id})">Register</button>
            <button onclick="cancelEvent(${event.id})">Cancel</button>
        `;
        eventContainer.appendChild(eventCard);
    });
}

// Function to handle event registration
function registerEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event.seats > 0) {
        event.seats--;
        document.querySelector(`#seats-${event.id}`).innerText = event.seats;
        alert(`Successfully registered for ${event.name}`);
    } else {
        alert(`Sorry, no seats available for ${event.name}`);
    }
}

// Function to handle event cancellation
function cancelEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    event.seats++;
    document.querySelector(`#seats-${event.id}`).innerText = event.seats;
    alert(`Cancelled registration for ${event.name}`);
}

// Initial render of events
renderEvents();
