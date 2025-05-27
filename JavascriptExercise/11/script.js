document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const selectedEvent = form.elements['event'].value;

    let isValid = true;

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('eventError').textContent = '';

    // Validate name
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Email is invalid.';
        isValid = false;
    }

    // Validate event selection
    if (selectedEvent === '') {
        document.getElementById('eventError').textContent = 'Please select an event.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can add code to handle the form submission, e.g., sending data to the server
    }
});
