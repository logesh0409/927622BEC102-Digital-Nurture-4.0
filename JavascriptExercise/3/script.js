document.addEventListener("DOMContentLoaded", () => {
    const events = [
        { name: "Event 1", date: "2025-06-01", seats: 0 },
        { name: "Event 2", date: "2025-07-10", seats: 5 },
        { name: "Event 3", date: "2025-05-20", seats: 10 }
    ];

    const currentDate = new Date();
    const eventList = document.getElementById("eventList");

    events.forEach((event, index) => {
        const eventDate = new Date(event.date);

        if (eventDate > currentDate && event.seats > 0) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${event.name}</strong> - ${event.date} | Seats Available: ${event.seats} 
                <button onclick="registerEvent(${index})">Register</button>`;
            eventList.appendChild(listItem);
        }
    });
});

function registerEvent(index) {
    try {
        const events = [
            { name: "Event 1", date: "2025-06-01", seats: 0 },
            { name: "Event 2", date: "2025-07-10", seats: 5 },
            { name: "Event 3", date: "2025-05-20", seats: 10 }
        ];

        if (events[index].seats > 0) {
            events[index].seats--;
            alert(`Successfully registered for ${events[index].name}. Seats remaining: ${events[index].seats}`);
            location.reload(); // Refresh to update seat count
        } else {
            throw new Error("No seats available.");
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}
