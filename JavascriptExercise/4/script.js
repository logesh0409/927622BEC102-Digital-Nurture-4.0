document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const selectedEvent = document.getElementById("event").value;

        if (name && email) {
            confirmationMessage.textContent = `Thank you, ${name}! You have successfully registered for the ${selectedEvent === "tech" ? "Tech Conference" : "Art Workshop"} event.`;
            confirmationMessage.style.color = "green";
        } else {
            confirmationMessage.textContent = "Please fill in all fields.";
            confirmationMessage.style.color = "red";
        }
    });
});
