document.querySelector("#registrationForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const payload = Object.fromEntries(formData);

    console.log("Form submitted:", payload);

    const confirmationMessage = document.getElementById("confirmationMessage");
    const errorMessage = document.getElementById("errorMessage");

    try {
        const response = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        confirmationMessage.classList.remove("hidden");
        errorMessage.classList.add("hidden");

    } catch (error) {
        console.error("Registration failed:", error);
        confirmationMessage.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }
});
