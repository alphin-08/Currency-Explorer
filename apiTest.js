// Declare an asynchronous function called fetchCurrencies
async function fetchCurrencies() {
    try {
        // Use axios to send a GET request to the given URL to fetch currency data
        const response = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json');
        
        // Store the data from the response in a variable called data
        const data = response.data;
        
        // Create an empty array to hold the valid currencies
        const currencies = [];
        
        // Loop through each key in the data object
        for (const code in data) {
            // Get the currency name corresponding to the current key (code)
            const name = data[code];
            // Check if the code does not start with 'crypto_', and both code and name are present
            if (!code.startsWith('crypto_') && code && name) {
                // Add an object with the code and name to the currencies array
                currencies.push({ code, name });
            }
        }

        return currencies;
    } catch (error) {
        // If there is an error during the try block, print the error message
        console.error('Error fetching currencies:', error);
    }
}

// Function to create a dropdown menu
function createDropdown(id, currencies) {
    const button = document.getElementById(id);
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown-menu';

    currencies.forEach(currency => {
        const item = document.createElement('a');
        item.className = 'dropdown-item';
        item.href = '#';
        item.textContent = `${currency.code}: ${currency.name}`;
        item.onclick = () => {
            button.innerHTML = `<b>${currency.code}</b>`;
            dropdown.classList.remove('show');
        };
        dropdown.appendChild(item);
    });

    button.parentNode.appendChild(dropdown);
    button.onclick = () => {
        dropdown.classList.toggle('show');
    };
}

// Call the fetchCurrencies function and populate the dropdowns
fetchCurrencies().then(currencies => {
    createDropdown('currencyButton1', currencies);
    createDropdown('currencyButton2', currencies);
});






