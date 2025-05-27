document.addEventListener("DOMContentLoaded", () => {
    // Register button event
    document.querySelectorAll(".register-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("You have successfully registered!");
        });
    });

    // Category filter event
    document.getElementById("categoryFilter").addEventListener("change", event => {
        let category = event.target.value;
        document.querySelectorAll(".event").forEach(eventItem => {
            eventItem.style.display = (category === "all" || eventItem.dataset.category === category) ? "flex" : "none";
        });
    });

    // Search box event
    document.getElementById("searchBox").addEventListener("keydown", event => {
        let searchTerm = event.target.value.toLowerCase();
        document.querySelectorAll(".event").forEach(eventItem => {
            eventItem.style.display = eventItem.textContent.toLowerCase().includes(searchTerm) ? "flex" : "none";
        });
    });
});
