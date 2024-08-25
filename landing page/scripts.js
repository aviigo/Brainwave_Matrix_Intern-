// Select all buttons with the class 'cta-button' (or any other class you want to target)
const buttons = document.querySelectorAll('.cta-button a, .button a, .btn a'); // Add other classes if needed

// Loop through each button and add an event listener
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action (e.g., following a link)

        // Log the button's text to the console
        console.log(`Button clicked: ${button.textContent}`);

        // Show an alert with the button's text
        alert(`You clicked the ${button.textContent} button!`);

        // Example: Fetch content dynamically (e.g., from an API)
        fetch('landing page\ecommerce-landing-page\api\server.jsa')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the fetched data to the console
                // Optionally, display the fetched content on the page
                const contentDiv = document.querySelector('#content');
                if (contentDiv) {
                    contentDiv.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
                }
            })
            .catch(error => console.error('Error fetching data:', error));

        // Additional interactivity: For example, highlight the clicked button
        button.style.backgroundColor = '#4CAF50'; // Change background color on click
    });
});
