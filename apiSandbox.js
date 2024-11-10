const currencyListUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json';

fetch(currencyListUrl)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
    })
    .catch(error => {
        console.error('Error fetching currency list:', error);
    });

function convertCurrency(amount, fromCurrency, toCurrency){
    const conversionUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`;

    return fetch(conversionUrl)
        .then(response => response.json())
        .then(data => {
            const rate = data[fromCurrency.toLowerCase()]
                            [toCurrency.toLowerCase()];
            const convertedAmount = amount * rate;
            return convertedAmount;
        })
        .catch(error => {
            console.error('Error converting currency:', error);
            throw error;
        });
}


function convertCurrencyWrapper(value, fromCurrency, toCurrency){
    convertCurrency(value, fromCurrency, toCurrency)
    .then(result=> console.log(`${value} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`))
    .catch(error => console.error('Conversion error:', error));
}

convertCurrencyWrapper(1000, 'FJD', 'AFN');