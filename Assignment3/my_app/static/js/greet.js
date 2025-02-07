
// Making sure script only runs when page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get elements by their id
    const textInput = document.getElementById("name-input");
    const button = document.getElementById("submit-btn");
    const output = document.getElementById("greeting-output");

    // Retrieve data and manipulate output html
    button.addEventListener("click", async function () {
        // Take the input value and clean up any human input errors (e.g., extra spaces)
        let name = textInput.value.trim();
        // Send asynchronous request to the Django backend with the cleaned-up name
        let response = await fetch(`/greet/?name=${encodeURIComponent(name)}`);
        // Convert response to JSON format
        let data = await response.json();
        // Update output area with greeting received from server
        output.innerHTML = data.greeting;
    });
});