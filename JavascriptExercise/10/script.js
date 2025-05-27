document.addEventListener("DOMContentLoaded", () => {
    const eventForm = document.getElementById("event-form");
    const eventList = document.getElementById("event-list");

    let events = [];

    eventForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("event-name").value.trim();
        const date = document.getElementById("event-date").value;
        const location = document.getElementById("event-location").value.trim();

        if (!name || !date || !location) {
            alert("Please fill out all fields!");
            return;
        }

        const newEvent = { name, date, location };
        events.push(newEvent);
        displayEvents();
        eventForm.reset();
    });

    const displayEvents = () => {
        eventList.innerHTML = "";
        events.forEach(({ name, date, location }) => {
            const li = document.createElement("li");
            li.textContent = `${name} - ${date} @ ${location}`;
            eventList.appendChild(li);
        });
    };
});
