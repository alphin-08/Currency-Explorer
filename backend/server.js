require('dotenv').config(); // Load .env variables
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const API_URL = `${process.env.API_BASE_URL}/${process.env.EXCHANGE_API_KEY}`;

app.get('/convert', async (req, res) => {
    const { fromCurrency, toCurrency, amount } = req.query;

    if (!fromCurrency || !toCurrency || !amount || isNaN(amount)) {
        return res.status(400).json({ error: 'Invalid query parameters.' });
    }

    try {
        const apiUrl = `${API_URL}/latest/${fromCurrency}`;
        console.log('External API URL:', apiUrl);
        
        const response = await axios.get(apiUrl);
        const rates = response.data.conversion_rates;

        if (!rates || !rates[toCurrency]) {
            throw new Error(`Rate not found for currency: ${toCurrency}`);
        }

        const convertedAmount = amount * rates[toCurrency];
        console.log('Converted Amount:', { convertedAmount });
        res.json({ convertedAmount });
    } catch (error) {
        console.error('Backend Error:', error.message || error);
        res.status(500).json({ error: 'Unable to fetch exchange rates.' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

