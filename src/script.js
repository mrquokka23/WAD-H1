document.addEventListener('DOMContentLoaded', function() {
    const accountLink = document.getElementById('account-link');
    const dropdown = document.getElementById('dropdown');

    // Toggle the dropdown menu on click
    accountLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent anchor default behavior
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!accountLink.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});