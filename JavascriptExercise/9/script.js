document.addEventListener('DOMContentLoaded', () => {
    const spinner = document.getElementById('spinner');
    const eventsContainer = document.getElementById('events');
    const categoryButtons = document.querySelectorAll('nav button');
    let eventsData = [];

    async function fetchEvents() {
        spinner.style.display = 'block';
        try {
            const response = await fetch('https://mockapi.com/events');
            eventsData = await response.json();
            spinner.style.display = 'none';
            displayEvents(eventsData);
        } catch (error) {
            spinner.style.display = 'none';
            eventsContainer.innerHTML = '<p>Error loading events. Please try again.</p>';
            console.error('Error fetching events:', error);
        }
    }

    function displayEvents(events) {
        eventsContainer.innerHTML = events.map(event =>
            `<div class="event-card">
                <h3>${event.name}</h3>
                <p>Category: ${event.category}</p>
                <p>Date: ${event.date}</p>
                <p>Seats Available: ${event.availableSeats}</p>
            </div>`
        ).join('');
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const filteredEvents = category === 'all' ? eventsData : eventsData.filter(event => event.category === category);
            displayEvents(filteredEvents);
        });
    });

    fetchEvents();
});
