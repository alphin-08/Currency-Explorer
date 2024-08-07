// List of known national currency codes (ISO 4217)
const nationalCurrencies = [
    'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD',
    'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY',
    'COP', 'CRC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP',
    'FOK', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF',
    'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KID',
    'KMF', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD',
    'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR',
    'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR',
    'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'SSP', 'STN', 'SYP', 'SZL', 'THB', 'TJS',
    'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND',
    'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW', 'ZWL'
];

// Fetch and display currencies for dropdowns and alphabetical browsing
async function fetchAndDisplayCurrencies() {
    try {
        // Make a GET request to the given URL to fetch currency data
        const response = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json');
        // Get the data from the response
        const data = response.data;
        // Create an array to store valid currencies
        const currencies = [];

        // Loop through each currency code in the data
        for (const code in data) {
            // Get the name of the currency corresponding to the code
            const name = data[code];
            // Check if the code is a known national currency and both code and name are present
            if (nationalCurrencies.includes(code.toUpperCase()) && code && name) {
                // Add the currency code and name to the currencies array
                currencies.push({ code, name });
            }
        }

        // Create dropdown menus for currency selection
        createDropdown('currencyButton1', currencies);
        createDropdown('currencyButton2', currencies);
        // Populate the currency browsing section
        populateCurrencySection(currencies);
    } catch (error) {
        // Log any error that occurs during the request
        console.error('Error fetching currencies:', error);
    }
}

// Function to create a dropdown menu
function createDropdown(id, currencies) {
    // Get the button element by its ID
    const button = document.getElementById(id);
    // Create a div element for the dropdown menu
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown-menu'; // Set the class name for styling

    // Loop through each currency in the array
    currencies.forEach(currency => {
        // Create an anchor element for each currency
        const item = document.createElement('a');
        item.className = 'dropdown-item'; // Set the class name for styling
        item.href = '#'; // Set the href attribute to '#'
        item.textContent = `${currency.code}: ${currency.name}`; // Set the text to display currency code and name
        item.onclick = () => {
            // Set the button's inner HTML to the selected currency code
            button.innerHTML = `<b>${currency.code}</b>`;
            // Hide the dropdown menu
            dropdown.classList.remove('show');
        };
        // Add the currency item to the dropdown menu
        dropdown.appendChild(item);
    });

    // Add the dropdown menu to the button's parent element
    button.parentNode.appendChild(dropdown);
    // Toggle the dropdown menu when the button is clicked
    button.onclick = (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to other elements
        // Close any open dropdown menus
        document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
        // Show or hide the current dropdown menu
        dropdown.classList.toggle('show');
    };
}

// Function to populate the currency section for browsing
function populateCurrencySection(currencies) {
    // Get the currency section element by its ID
    const currencySection = document.getElementById('currencySection');
    // Create an object to group currencies by their first letter
    const groupedCurrencies = {};

    // Loop through each currency in the array
    currencies.forEach(currency => {
        // Get the first letter of the currency code and convert it to uppercase
        const firstLetter = currency.code[0].toUpperCase();
        // If the letter group does not exist, create it
        if (!groupedCurrencies[firstLetter]) {
            groupedCurrencies[firstLetter] = [];
        }
        // Add the currency to the appropriate letter group
        groupedCurrencies[firstLetter].push(currency);
    });

    // Loop through each letter group in the grouped currencies object
    for (const letter in groupedCurrencies) {
        // Create a section element for each letter
        const section = document.createElement('section');
        section.id = letter.toLowerCase(); // Set the ID to the lowercase letter
        // Create a heading element for the letter
        const heading = document.createElement('h1');
        heading.textContent = letter; // Set the text content to the letter
        section.appendChild(heading); // Add the heading to the section

        // Create a div element to contain the currencies
        const currenciesDiv = document.createElement('div');
        currenciesDiv.className = 'currencies'; // Set the class name for styling

        // Loop through each currency in the letter group
        groupedCurrencies[letter].forEach(currency => {
            // Create a div element for each currency
            const currencyDiv = document.createElement('div');
            currencyDiv.className = 'subcurrencies'; // Set the class name for styling
            // Set the inner HTML to display the currency code and name
            currencyDiv.innerHTML = `
                <p>${currency.code}
                <br>${currency.name}
                </p>
            `;
            // Add the currency div to the currencies div
            currenciesDiv.appendChild(currencyDiv);
        });

        // Add the currencies div to the section
        section.appendChild(currenciesDiv);
        // Add the section to the currency section element
        currencySection.appendChild(section);
    }
}

// Function to convert currency
async function convertCurrency(fromCurrency, toCurrency, amount) {
    try {
        // Fetch the exchange rates for the base currency (fromCurrency)
        const response = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`);
        const rates = response.data;

        // Get the rate for the target currency (toCurrency)
        const rate = rates[toCurrency];

        if (rate) {
            // Calculate the converted amount
            const convertedAmount = amount * rate;
            return convertedAmount;
        } else {
            throw new Error(`Exchange rate not available for ${toCurrency}`);
        }
    } catch (error) {
        console.error('Error converting currency:', error);
        return null;
    }
}

// Event listener for the calculate button
document.getElementById('calculateButton').addEventListener('click', async () => {
    const amount = document.getElementById('amountInput').value;
    const fromCurrency = document.getElementById('currencyButton1').textContent.trim();
    const toCurrency = document.getElementById('currencyButton2').textContent.trim();

    if (amount && fromCurrency && toCurrency && fromCurrency !== 'CUR' && toCurrency !== 'CUR') {
        const convertedAmount = await convertCurrency(fromCurrency, toCurrency, amount);
        if (convertedAmount !== null) {
            document.getElementById('convertedAmount').value = convertedAmount.toFixed(2);
        } else {
            alert('Error converting currency. Please try again.');
        }
    } else {
        alert('Please enter a valid amount and select both currencies.');
    }
});

// Close the dropdown when clicking outside
document.addEventListener('click', () => {
    // Hide all dropdown menus
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
});

// Fetch and display the currencies when the page loads
fetchAndDisplayCurrencies();
