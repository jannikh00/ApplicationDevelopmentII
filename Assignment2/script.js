// Function to find an ingredient substitute
async function findSubstitute() {
    // Get the user's input and format it for search
    const inputField = document.getElementById("ingredientInput");
    const ingredient = inputField.value.trim().toLowerCase();

    // Get the result display area
    const resultDiv = document.getElementById("result");

    // If no input is provided, show an error message
    if (!ingredient) {
        resultDiv.innerHTML = `<p class="error">Please enter an ingredient.</p>`;
        return;
    }

    try {
        // Fetch the ingredient substitution data from ingredient.txt
        const response = await fetch("ingredient.txt");
        const textData = await response.text();

        // Convert the text data to a JSON object
        const ingredientSubstitutes = JSON.parse(textData);

        // Check if the ingredient has a substitution
        if (ingredientSubstitutes[ingredient]) {
            // Display the found substitution
            resultDiv.innerHTML = `<h3>Substitute for ${ingredient}</h3>
                                   <p>${ingredientSubstitutes[ingredient]}</p>`;
        } else {
            // Display an error message if no substitute is found
            resultDiv.innerHTML = `<p class="error">No substitute found for ${ingredient}.</p>`;
        }
    } catch (error) {
        // Handle any errors that occur while fetching or parsing data
        resultDiv.innerHTML = `<p class="error">Error loading data. Please try again later.</p>`;
    }
}

// Attach event listener when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("findButton").addEventListener("click", findSubstitute);
});