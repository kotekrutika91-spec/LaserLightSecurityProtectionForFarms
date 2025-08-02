// Example JavaScript for form validation or interactivity
document.querySelector('form').addEventListener('submit', function(event) {
    const fullName = document.getElementById('fullName').value;
    if (fullName.trim() === '') {
        alert('Please enter your full name.');
        event.preventDefault(); // Prevent form submission
    }
    // Additional validation can be added here
});
