// Import the axios library, which is used to make HTTP requests
const axios = require('axios');

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

        // Print a header for the list of available currencies
        console.log('Available Currencies:');
        // Loop through each currency in the currencies array
        for (const currency of currencies) {
            // Print the code and name of the current currency
            console.log(`${currency.code}: ${currency.name}`);
        }
    } catch (error) {
        // If there is an error during the try block, print the error message
        console.error('Error fetching currencies:', error);
    }
}



async function fetchCurrencyValuesBasedUsd() {
    // Declares an asynchronous function named fetchCurrencyValues.

    try {
        // Begins a try block to handle any errors that occur within it.

        const response = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
        // Uses axios to send an HTTP GET request to the specified URL and waits for the response. 
        // The response is assigned to the variable response.

        const data = response.data;
        // Extracts the data property from the response object and assigns it to the variable data.

        const { date, ...currencies } = data;
        // Uses destructuring to extract the date property from the data object and assigns the rest of the properties 
        // to the currencies object.

        console.log(`Currency Values Based on USD (as of ${date}):`);
        // Prints a message to the console, including the date, indicating the currency values are based on USD.

        for (const code in currencies) {
            // Starts a for-in loop to iterate over each property (currency code) in the currencies object.

            const value = currencies[code];
            // Assigns the value of the current currency code to the variable value.

            if (typeof value === 'object') {
                // Checks if the type of the value is an object.

                console.log(`1 USD = ${JSON.stringify(value)} ${code}`);
                // If the value is an object, converts it to a JSON string and prints it with the currency code.

            } else {
                console.log(`1 USD = ${value} ${code}`);
                // If the value is not an object, prints it directly with the currency code.
            }
        }
    } catch (error) {
        // Begins a catch block to handle any errors that occur in the try block.

        console.error('Error fetching currency values:', error);
        // Prints an error message to the console if an error occurs.
    }
}



// Call the fetchCurrencies function to execute the code
fetchCurrencies();

// // Call the fetchCurrencyValuesUsd function to execute the code
// fetchCurrencyValuesBasedUsd();

