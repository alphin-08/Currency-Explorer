import React, { useState } from 'react';
import './App.css'; // Include your main styles
import './main.css';
import './responsive.css';
import doubleArrow from './imgs/doubleArrow.png';
import currencyMachine from './imgs/currencyMachine.png';


function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/convert?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}&amount=${amount}`
      );
      const data = await response.json();
      setConvertedAmount(data.convertedAmount);
    } catch (error) {
      console.error('Error fetching conversion result:', error);
    }
  };

  return (
    <div>
      {/* Front Page Section */}
      <section id="frontPage">
        <div className="backgroundContainer">
          <div className="ball"></div>
          <div className="ball2"></div>
          <div className="ball3"></div>
          <div className="ball4"></div>
        </div>
        <div className="mainContainer">
          <div className="navigationBar">
            <nav>
              <div className="nav-items">
                <a href="#homeSection" id="home">Home</a>
                <a href="#browseCurrenciesSection" id="currencies">Browse Currencies</a>
              </div>
            </nav>
          </div>
          <div className="content">
            <div className="leftContainer">
              <h1>Currency<br />Converter</h1>
              <p>To get started, choose a currency from the dropdown menu and enter an amount</p>
              
              <div className="inputHeadings">
                <label htmlFor="amountInput">Amount</label>
                <label htmlFor="convertedAmount">Converted To</label>
              </div>
              <div className="inputContainer">
                <input type="number" id="amountInput" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount"
                />

                <img className="Double-arrow" src={doubleArrow} alt="double arrow" />
                {convertedAmount !== null && !isNaN(convertedAmount) ? (
                  <input type="text" id="convertedAmount" value={convertedAmount !== null ? convertedAmount.toFixed(2) : ''} placeholder="Converted amount" readOnly
                  />
                ) : (
                  <input
                    type="text"
                    id="convertedAmount"
                    value=""
                    placeholder="Converted amount"
                    readOnly
                  />
                )}
              </div>
              <div className="dropDown">
                <select
                  className='currencyButton' id="currencyButton1" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="JPY">JPY</option>
                  <option value="GBP">GBP</option>
                  <option value="AUD">AUD</option>
                  <option value="CAD">CAD</option>
                  <option value="CHF">CHF</option>
                  <option value="CNY">CNY</option>
                  <option value="SEK">SEK</option>
                  <option value="NZD">NZD</option>
                </select>

                <select
                  className="secondCurrencyButton"
                  id="currencyButton2"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="JPY">JPY</option>
                  <option value="GBP">GBP</option>
                  <option value="AUD">AUD</option>
                  <option value="CAD">CAD</option>
                  <option value="CHF">CHF</option>
                  <option value="CNY">CNY</option>
                  <option value="SEK">SEK</option>
                  <option value="NZD">NZD</option>
                </select>

              </div>
              <button id="calculateButton" onClick={handleConvert}>Calculate</button>
            </div>

            <div className="rightContainer">
              <img src={currencyMachine} alt="Currency Machine" />
            </div>
          </div>
        </div>
      </section>

      {/* Browse Currencies Section */}
      <section id="browseCurrenciesSection">
        <div className="mainContainer2">
          <div className="headingContainer">
            <h1>Browse The Different Currencies</h1>
          </div>
          <div className="navigationBar2">
            <nav>
              <div className="nav-items2">
                {/* Navigation for A-Z */}
                {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                  <a href={`#${letter.toLowerCase()}`} key={letter}>{letter}</a>
                ))}
              </div>
            </nav>
          </div>
          <div className="currencySection" id="currencySection">
          </div>
        </div>
      </section>

      {/* Live Rates Section */}
      <section id="liveRateSection">
        <div className="mainContainer3"></div>
      </section>
    </div>
    
  );
}

export default App;

