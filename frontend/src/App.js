import React, { useState } from 'react';
import './App.css';
import './main.css';
import './responsive.css';
import doubleArrow from './imgs/doubleArrow.png';
import currencyMachine from './imgs/currencyMachine.png';
import exchangeRate from './imgs/exchangeRate.png';
import exchangeRate2 from './imgs/exchangeRate2.png';

const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'AED', name: 'Emirati Dirham' },
    { code: 'AFN', name: 'Afghan Afghani' },
    { code: 'ALL', name: 'Albanian Lek' },
    { code: 'AMD', name: 'Armenian Dram' },
    { code: 'ANG', name: 'Netherlands Antillean Guilder' },
    { code: 'AOA', name: 'Angolan Kwanza' },
    { code: 'ARS', name: 'Argentine Peso' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'AWG', name: 'Aruban Florin' },
    { code: 'AZN', name: 'Azerbaijani Manat' },
    { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark' },
    { code: 'BBD', name: 'Barbadian Dollar' },
    { code: 'BDT', name: 'Bangladeshi Taka' },
    { code: 'BGN', name: 'Bulgarian Lev' },
    { code: 'BHD', name: 'Bahraini Dinar' },
    { code: 'BIF', name: 'Burundian Franc' },
    { code: 'BMD', name: 'Bermudian Dollar' },
    { code: 'BND', name: 'Brunei Dollar' },
    { code: 'BOB', name: 'Bolivian Boliviano' },
    { code: 'BRL', name: 'Brazilian Real' },
    { code: 'BSD', name: 'Bahamian Dollar' },
    { code: 'BTN', name: 'Bhutanese Ngultrum' },
    { code: 'BWP', name: 'Botswana Pula' },
    { code: 'BYN', name: 'Belarusian Ruble' },
    { code: 'BZD', name: 'Belize Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'CDF', name: 'Congolese Franc' },
    { code: 'CHF', name: 'Swiss Franc' },
    { code: 'CLP', name: 'Chilean Peso' },
    { code: 'CNY', name: 'Chinese Yuan' },
    { code: 'COP', name: 'Colombian Peso' },
    { code: 'CRC', name: 'Costa Rican Colón' },
    { code: 'CUP', name: 'Cuban Peso' },
    { code: 'CVE', name: 'Cape Verdean Escudo' },
    { code: 'CZK', name: 'Czech Koruna' },
    { code: 'DJF', name: 'Djiboutian Franc' },
    { code: 'DKK', name: 'Danish Krone' },
    { code: 'DOP', name: 'Dominican Peso' },
    { code: 'DZD', name: 'Algerian Dinar' },
    { code: 'EGP', name: 'Egyptian Pound' },
    { code: 'ERN', name: 'Eritrean Nakfa' },
    { code: 'ETB', name: 'Ethiopian Birr' },
    { code: 'EUR', name: 'Euro' },
    { code: 'FJD', name: 'Fijian Dollar' },
    { code: 'FKP', name: 'Falkland Islands Pound' },
    { code: 'FOK', name: 'Faroese Króna' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'GEL', name: 'Georgian Lari' },
    { code: 'GGP', name: 'Guernsey Pound' },
    { code: 'GHS', name: 'Ghanaian Cedi' },
    { code: 'GIP', name: 'Gibraltar Pound' },
    { code: 'GMD', name: 'Gambian Dalasi' },
    { code: 'GNF', name: 'Guinean Franc' },
    { code: 'GTQ', name: 'Guatemalan Quetzal' },
    { code: 'GYD', name: 'Guyanese Dollar' },
    { code: 'HKD', name: 'Hong Kong Dollar' },
    { code: 'HNL', name: 'Honduran Lempira' },
    { code: 'HRK', name: 'Croatian Kuna' },
    { code: 'HTG', name: 'Haitian Gourde' },
    { code: 'HUF', name: 'Hungarian Forint' },
    { code: 'IDR', name: 'Indonesian Rupiah' },
    { code: 'ILS', name: 'Israeli New Shekel' },
    { code: 'IMP', name: 'Isle of Man Pound' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'IQD', name: 'Iraqi Dinar' },
    { code: 'IRR', name: 'Iranian Rial' },
    { code: 'ISK', name: 'Icelandic Króna' },
    { code: 'JEP', name: 'Jersey Pound' },
    { code: 'JMD', name: 'Jamaican Dollar' },
    { code: 'JOD', name: 'Jordanian Dinar' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'KES', name: 'Kenyan Shilling' },
    { code: 'KGS', name: 'Kyrgyzstani Som' },
    { code: 'KHR', name: 'Cambodian Riel' },
    { code: 'KID', name: 'Kiribati Dollar' },
    { code: 'KMF', name: 'Comorian Franc' },
    { code: 'KRW', name: 'South Korean Won' },
    { code: 'KWD', name: 'Kuwaiti Dinar' },
    { code: 'KYD', name: 'Cayman Islands Dollar' },
    { code: 'KZT', name: 'Kazakhstani Tenge' },
    { code: 'LAK', name: 'Lao Kip' },
    { code: 'LBP', name: 'Lebanese Pound' },
    { code: 'LKR', name: 'Sri Lankan Rupee' },
    { code: 'LRD', name: 'Liberian Dollar' },
    { code: 'LSL', name: 'Lesotho Loti' },
    { code: 'LYD', name: 'Libyan Dinar' },
    { code: 'MAD', name: 'Moroccan Dirham' },
    { code: 'MDL', name: 'Moldovan Leu' },
    { code: 'MGA', name: 'Malagasy Ariary' },
    { code: 'MKD', name: 'Macedonian Denar' },
    { code: 'MMK', name: 'Burmese Kyat' },
    { code: 'MNT', name: 'Mongolian Tögrög' },
    { code: 'MOP', name: 'Macanese Pataca' },
    { code: 'MRU', name: 'Mauritanian Ouguiya' },
    { code: 'MUR', name: 'Mauritian Rupee' },
    { code: 'MVR', name: 'Maldivian Rufiyaa' },
    { code: 'MWK', name: 'Malawian Kwacha' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'MYR', name: 'Malaysian Ringgit' },
    { code: 'MZN', name: 'Mozambican Metical' },
    { code: 'NAD', name: 'Namibian Dollar' },
    { code: 'NGN', name: 'Nigerian Naira' },
    { code: 'NIO', name: 'Nicaraguan Córdoba' },
    { code: 'NOK', name: 'Norwegian Krone' },
    { code: 'NPR', name: 'Nepalese Rupee' },
    { code: 'NZD', name: 'New Zealand Dollar' },
    { code: 'OMR', name: 'Omani Rial' },
    { code: 'PAB', name: 'Panamanian Balboa' },
    { code: 'PEN', name: 'Peruvian Sol' },
    { code: 'PGK', name: 'Papua New Guinean Kina' },
    { code: 'PHP', name: 'Philippine Peso' },
    { code: 'PKR', name: 'Pakistani Rupee' },
    { code: 'PLN', name: 'Polish Złoty' },
    { code: 'PYG', name: 'Paraguayan Guaraní' },
    { code: 'QAR', name: 'Qatari Riyal' },
    { code: 'RON', name: 'Romanian Leu' },
    { code: 'RSD', name: 'Serbian Dinar' },
    { code: 'RUB', name: 'Russian Ruble' },
    { code: 'RWF', name: 'Rwandan Franc' },
    { code: 'SAR', name: 'Saudi Riyal' },
    { code: 'SBD', name: 'Solomon Islands Dollar' },
    { code: 'SCR', name: 'Seychellois Rupee' },
    { code: 'SDG', name: 'Sudanese Pound' },
    { code: 'SEK', name: 'Swedish Krona' },
    { code: 'SGD', name: 'Singapore Dollar' },
    { code: 'SHP', name: 'Saint Helena Pound' },
    { code: 'SLE', name: 'Sierra Leonean Leone' },
    { code: 'SLL', name: 'Sierra Leonean Leone' },
    { code: 'SOS', name: 'Somali Shilling' },
    { code: 'SRD', name: 'Surinamese Dollar' },
    { code: 'SSP', name: 'South Sudanese Pound' },
    { code: 'STN', name: 'São Tomé and Príncipe Dobra' },
    { code: 'SYP', name: 'Syrian Pound' },
    { code: 'SZL', name: 'Swazi Lilangeni' },
    { code: 'THB', name: 'Thai Baht' },
    { code: 'TJS', name: 'Tajikistani Somoni' },
    { code: 'TMT', name: 'Turkmenistani Manat' },
    { code: 'TND', name: 'Tunisian Dinar' },
    { code: 'TOP', name: 'Tongan Paʻanga' },
    { code: 'TRY', name: 'Turkish Lira' },
    { code: 'TTD', name: 'Trinidad and Tobago Dollar' },
    { code: 'TVD', name: 'Tuvaluan Dollar' },
    { code: 'TWD', name: 'New Taiwan Dollar' },
    { code: 'TZS', name: 'Tanzanian Shilling' },
    { code: 'UAH', name: 'Ukrainian Hryvnia' },
    { code: 'UGX', name: 'Ugandan Shilling' },
    { code: 'UYU', name: 'Uruguayan Peso' },
    { code: 'UZS', name: 'Uzbekistani Som' },
    { code: 'VES', name: 'Venezuelan Bolívar' },
    { code: 'VND', name: 'Vietnamese Đồng' },
    { code: 'VUV', name: 'Vanuatu Vatu' },
    { code: 'WST', name: 'Samoan Tālā' },
    { code: 'XAF', name: 'Central African CFA Franc' },
    { code: 'XCD', name: 'East Caribbean Dollar' },
    { code: 'XDR', name: 'Special Drawing Rights' },
    { code: 'XOF', name: 'West African CFA Franc' },
    { code: 'XPF', name: 'CFP Franc' },
    { code: 'YER', name: 'Yemeni Rial' },
    { code: 'ZAR', name: 'South African Rand' },
    { code: 'ZMW', name: 'Zambian Kwacha' },
    { code: 'ZWL', name: 'Zimbabwean Dollar' },
];

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
              
              <div className="inputContainer">
                <div className="inputGroup">
                  <label htmlFor="amountInput">Enter Amount</label>
                  <input 
                    type="number" 
                    id="amountInput" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Enter amount" 
                  />
                </div>

                <img className="Double-arrow" src={doubleArrow} alt="double arrow" />

                <div className="inputGroup">
                  <label htmlFor="convertedAmount">Result</label>
                  {convertedAmount !== null && !isNaN(convertedAmount) ? (
                    <input 
                      type="text" 
                      id="convertedAmount" 
                      value={convertedAmount.toFixed(2)} 
                      placeholder="Converted amount" 
                      readOnly 
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
              </div>


              <div className="dropDown">
                <select
                  className='currencyButton' id="currencyButton1" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}
                >
                  <option value="USD">USD</option>
                  <option value="AED">AED</option>
                  <option value="AFN">AFN</option>
                  <option value="ALL">ALL</option>
                  <option value="AMD">AMD</option>
                  <option value="ANG">ANG</option>
                  <option value="AOA">AOA</option>
                  <option value="ARS">ARS</option>
                  <option value="AUD">AUD</option>
                  <option value="AWG">AWG</option>
                  <option value="AZN">AZN</option>
                  <option value="BAM">BAM</option>
                  <option value="BBD">BBD</option>
                  <option value="BDT">BDT</option>
                  <option value="BGN">BGN</option>
                  <option value="BHD">BHD</option>
                  <option value="BIF">BIF</option>
                  <option value="BMD">BMD</option>
                  <option value="BND">BND</option>
                  <option value="BOB">BOB</option>
                  <option value="BRL">BRL</option>
                  <option value="BSD">BSD</option>
                  <option value="BTN">BTN</option>
                  <option value="BWP">BWP</option>
                  <option value="BYN">BYN</option>
                  <option value="BZD">BZD</option>
                  <option value="CAD">CAD</option>
                  <option value="CDF">CDF</option>
                  <option value="CHF">CHF</option>
                  <option value="CLP">CLP</option>
                  <option value="CNY">CNY</option>
                  <option value="COP">COP</option>
                  <option value="CRC">CRC</option>
                  <option value="CUP">CUP</option>
                  <option value="CVE">CVE</option>
                  <option value="CZK">CZK</option>
                  <option value="DJF">DJF</option>
                  <option value="DKK">DKK</option>
                  <option value="DOP">DOP</option>
                  <option value="DZD">DZD</option>
                  <option value="EGP">EGP</option>
                  <option value="ERN">ERN</option>
                  <option value="ETB">ETB</option>
                  <option value="EUR">EUR</option>
                  <option value="FJD">FJD</option>
                  <option value="FKP">FKP</option>
                  <option value="FOK">FOK</option>
                  <option value="GBP">GBP</option>
                  <option value="GEL">GEL</option>
                  <option value="GGP">GGP</option>
                  <option value="GHS">GHS</option>
                  <option value="GIP">GIP</option>
                  <option value="GMD">GMD</option>
                  <option value="GNF">GNF</option>
                  <option value="GTQ">GTQ</option>
                  <option value="GYD">GYD</option>
                  <option value="HKD">HKD</option>
                  <option value="HNL">HNL</option>
                  <option value="HRK">HRK</option>
                  <option value="HTG">HTG</option>
                  <option value="HUF">HUF</option>
                  <option value="IDR">IDR</option>
                  <option value="ILS">ILS</option>
                  <option value="IMP">IMP</option>
                  <option value="INR">INR</option>
                  <option value="IQD">IQD</option>
                  <option value="IRR">IRR</option>
                  <option value="ISK">ISK</option>
                  <option value="JEP">JEP</option>
                  <option value="JMD">JMD</option>
                  <option value="JOD">JOD</option>
                  <option value="JPY">JPY</option>
                  <option value="KES">KES</option>
                  <option value="KGS">KGS</option>
                  <option value="KHR">KHR</option>
                  <option value="KID">KID</option>
                  <option value="KMF">KMF</option>
                  <option value="KRW">KRW</option>
                  <option value="KWD">KWD</option>
                  <option value="KYD">KYD</option>
                  <option value="KZT">KZT</option>
                  <option value="LAK">LAK</option>
                  <option value="LBP">LBP</option>
                  <option value="LKR">LKR</option>
                  <option value="LRD">LRD</option>
                  <option value="LSL">LSL</option>
                  <option value="LYD">LYD</option>
                  <option value="MAD">MAD</option>
                  <option value="MDL">MDL</option>
                  <option value="MGA">MGA</option>
                  <option value="MKD">MKD</option>
                  <option value="MMK">MMK</option>
                  <option value="MNT">MNT</option>
                  <option value="MOP">MOP</option>
                  <option value="MRU">MRU</option>
                  <option value="MUR">MUR</option>
                  <option value="MVR">MVR</option>
                  <option value="MWK">MWK</option>
                  <option value="MXN">MXN</option>
                  <option value="MYR">MYR</option>
                  <option value="MZN">MZN</option>
                  <option value="NAD">NAD</option>
                  <option value="NGN">NGN</option>
                  <option value="NIO">NIO</option>
                  <option value="NOK">NOK</option>
                  <option value="NPR">NPR</option>
                  <option value="NZD">NZD</option>
                  <option value="OMR">OMR</option>
                  <option value="PAB">PAB</option>
                  <option value="PEN">PEN</option>
                  <option value="PGK">PGK</option>
                  <option value="PHP">PHP</option>
                  <option value="PKR">PKR</option>
                  <option value="PLN">PLN</option>
                  <option value="PYG">PYG</option>
                  <option value="QAR">QAR</option>
                  <option value="RON">RON</option>
                  <option value="RSD">RSD</option>
                  <option value="RUB">RUB</option>
                  <option value="RWF">RWF</option>
                  <option value="SAR">SAR</option>
                  <option value="SBD">SBD</option>
                  <option value="SCR">SCR</option>
                  <option value="SDG">SDG</option>
                  <option value="SEK">SEK</option>
                  <option value="SGD">SGD</option>
                  <option value="SHP">SHP</option>
                  <option value="SLE">SLE</option>
                  <option value="SLL">SLL</option>
                  <option value="SOS">SOS</option>
                  <option value="SRD">SRD</option>
                  <option value="SSP">SSP</option>
                  <option value="STN">STN</option>
                  <option value="SYP">SYP</option>
                  <option value="SZL">SZL</option>
                  <option value="THB">THB</option>
                  <option value="TJS">TJS</option>
                  <option value="TMT">TMT</option>
                  <option value="TND">TND</option>
                  <option value="TOP">TOP</option>
                  <option value="TRY">TRY</option>
                  <option value="TTD">TTD</option>
                  <option value="TVD">TVD</option>
                  <option value="TWD">TWD</option>
                  <option value="TZS">TZS</option>
                  <option value="UAH">UAH</option>
                  <option value="UGX">UGX</option>
                  <option value="UYU">UYU</option>
                  <option value="UZS">UZS</option>
                  <option value="VES">VES</option>
                  <option value="VND">VND</option>
                  <option value="VUV">VUV</option>
                  <option value="WST">WST</option>
                  <option value="XAF">XAF</option>
                  <option value="XCD">XCD</option>
                  <option value="XDR">XDR</option>
                  <option value="XOF">XOF</option>
                  <option value="XPF">XPF</option>
                  <option value="YER">YER</option>
                  <option value="ZAR">ZAR</option>
                  <option value="ZMW">ZMW</option>
                  <option value="ZWL">ZWL</option>
                </select>

                <select
                  className="secondCurrencyButton"
                  id="currencyButton2"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  <option value="USD">USD</option>
                  <option value="AED">AED</option>
                  <option value="AFN">AFN</option>
                  <option value="ALL">ALL</option>
                  <option value="AMD">AMD</option>
                  <option value="ANG">ANG</option>
                  <option value="AOA">AOA</option>
                  <option value="ARS">ARS</option>
                  <option value="AUD">AUD</option>
                  <option value="AWG">AWG</option>
                  <option value="AZN">AZN</option>
                  <option value="BAM">BAM</option>
                  <option value="BBD">BBD</option>
                  <option value="BDT">BDT</option>
                  <option value="BGN">BGN</option>
                  <option value="BHD">BHD</option>
                  <option value="BIF">BIF</option>
                  <option value="BMD">BMD</option>
                  <option value="BND">BND</option>
                  <option value="BOB">BOB</option>
                  <option value="BRL">BRL</option>
                  <option value="BSD">BSD</option>
                  <option value="BTN">BTN</option>
                  <option value="BWP">BWP</option>
                  <option value="BYN">BYN</option>
                  <option value="BZD">BZD</option>
                  <option value="CAD">CAD</option>
                  <option value="CDF">CDF</option>
                  <option value="CHF">CHF</option>
                  <option value="CLP">CLP</option>
                  <option value="CNY">CNY</option>
                  <option value="COP">COP</option>
                  <option value="CRC">CRC</option>
                  <option value="CUP">CUP</option>
                  <option value="CVE">CVE</option>
                  <option value="CZK">CZK</option>
                  <option value="DJF">DJF</option>
                  <option value="DKK">DKK</option>
                  <option value="DOP">DOP</option>
                  <option value="DZD">DZD</option>
                  <option value="EGP">EGP</option>
                  <option value="ERN">ERN</option>
                  <option value="ETB">ETB</option>
                  <option value="EUR">EUR</option>
                  <option value="FJD">FJD</option>
                  <option value="FKP">FKP</option>
                  <option value="FOK">FOK</option>
                  <option value="GBP">GBP</option>
                  <option value="GEL">GEL</option>
                  <option value="GGP">GGP</option>
                  <option value="GHS">GHS</option>
                  <option value="GIP">GIP</option>
                  <option value="GMD">GMD</option>
                  <option value="GNF">GNF</option>
                  <option value="GTQ">GTQ</option>
                  <option value="GYD">GYD</option>
                  <option value="HKD">HKD</option>
                  <option value="HNL">HNL</option>
                  <option value="HRK">HRK</option>
                  <option value="HTG">HTG</option>
                  <option value="HUF">HUF</option>
                  <option value="IDR">IDR</option>
                  <option value="ILS">ILS</option>
                  <option value="IMP">IMP</option>
                  <option value="INR">INR</option>
                  <option value="IQD">IQD</option>
                  <option value="IRR">IRR</option>
                  <option value="ISK">ISK</option>
                  <option value="JEP">JEP</option>
                  <option value="JMD">JMD</option>
                  <option value="JOD">JOD</option>
                  <option value="JPY">JPY</option>
                  <option value="KES">KES</option>
                  <option value="KGS">KGS</option>
                  <option value="KHR">KHR</option>
                  <option value="KID">KID</option>
                  <option value="KMF">KMF</option>
                  <option value="KRW">KRW</option>
                  <option value="KWD">KWD</option>
                  <option value="KYD">KYD</option>
                  <option value="KZT">KZT</option>
                  <option value="LAK">LAK</option>
                  <option value="LBP">LBP</option>
                  <option value="LKR">LKR</option>
                  <option value="LRD">LRD</option>
                  <option value="LSL">LSL</option>
                  <option value="LYD">LYD</option>
                  <option value="MAD">MAD</option>
                  <option value="MDL">MDL</option>
                  <option value="MGA">MGA</option>
                  <option value="MKD">MKD</option>
                  <option value="MMK">MMK</option>
                  <option value="MNT">MNT</option>
                  <option value="MOP">MOP</option>
                  <option value="MRU">MRU</option>
                  <option value="MUR">MUR</option>
                  <option value="MVR">MVR</option>
                  <option value="MWK">MWK</option>
                  <option value="MXN">MXN</option>
                  <option value="MYR">MYR</option>
                  <option value="MZN">MZN</option>
                  <option value="NAD">NAD</option>
                  <option value="NGN">NGN</option>
                  <option value="NIO">NIO</option>
                  <option value="NOK">NOK</option>
                  <option value="NPR">NPR</option>
                  <option value="NZD">NZD</option>
                  <option value="OMR">OMR</option>
                  <option value="PAB">PAB</option>
                  <option value="PEN">PEN</option>
                  <option value="PGK">PGK</option>
                  <option value="PHP">PHP</option>
                  <option value="PKR">PKR</option>
                  <option value="PLN">PLN</option>
                  <option value="PYG">PYG</option>
                  <option value="QAR">QAR</option>
                  <option value="RON">RON</option>
                  <option value="RSD">RSD</option>
                  <option value="RUB">RUB</option>
                  <option value="RWF">RWF</option>
                  <option value="SAR">SAR</option>
                  <option value="SBD">SBD</option>
                  <option value="SCR">SCR</option>
                  <option value="SDG">SDG</option>
                  <option value="SEK">SEK</option>
                  <option value="SGD">SGD</option>
                  <option value="SHP">SHP</option>
                  <option value="SLE">SLE</option>
                  <option value="SLL">SLL</option>
                  <option value="SOS">SOS</option>
                  <option value="SRD">SRD</option>
                  <option value="SSP">SSP</option>
                  <option value="STN">STN</option>
                  <option value="SYP">SYP</option>
                  <option value="SZL">SZL</option>
                  <option value="THB">THB</option>
                  <option value="TJS">TJS</option>
                  <option value="TMT">TMT</option>
                  <option value="TND">TND</option>
                  <option value="TOP">TOP</option>
                  <option value="TRY">TRY</option>
                  <option value="TTD">TTD</option>
                  <option value="TVD">TVD</option>
                  <option value="TWD">TWD</option>
                  <option value="TZS">TZS</option>
                  <option value="UAH">UAH</option>
                  <option value="UGX">UGX</option>
                  <option value="UYU">UYU</option>
                  <option value="UZS">UZS</option>
                  <option value="VES">VES</option>
                  <option value="VND">VND</option>
                  <option value="VUV">VUV</option>
                  <option value="WST">WST</option>
                  <option value="XAF">XAF</option>
                  <option value="XCD">XCD</option>
                  <option value="XDR">XDR</option>
                  <option value="XOF">XOF</option>
                  <option value="XPF">XPF</option>
                  <option value="YER">YER</option>
                  <option value="ZAR">ZAR</option>
                  <option value="ZMW">ZMW</option>
                  <option value="ZWL">ZWL</option>
                </select>

              </div>
              <button id="calculateButton" onClick={handleConvert}>Calculate</button>
            </div>

            <div className="rightContainer">
              <img src={exchangeRate2} alt="Currency Machine" />
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
                  <a href={`#${letter}`} key={letter}>{letter}</a>
                ))}
              </div>
            </nav>
          </div>
          <div className="currencySection" id="currencySection">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
              <div key={letter} id={letter} className="currencyGroup">
                <h2>{letter}</h2>
                <div className="currencyCards">
                  {currencies
                    .filter((currency) => currency.name.startsWith(letter))
                    .map((currency) => (
                      <div key={currency.code} className="currencyCard">
                        <p className="currencyCode">{currency.code.toLowerCase()}</p>
                        <p className="currencyName">{currency.name}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
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

