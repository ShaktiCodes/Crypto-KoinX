import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ChartWidget from './components/ChartWidget';
import TrendingCoins from './components/TrendingCoins';
import YouMayAlsoLike from './components/YouMayAlsoLike';
import InfoBox from './components/InfoBox';

const App = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    // Fetch Bitcoin Price
    fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true'
    )
      .then((response) => response.json())
      .then((data) => setBitcoinData(data.bitcoin));
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="content">
        <div className="main-content">
          <ChartWidget />
          {bitcoinData && (
            <div className="info-container">
              <InfoBox
                title="Price in USD"
                value={`$${bitcoinData.usd}`}
                change={`${bitcoinData.usd_24h_change.toFixed(2)}%`}
              />
              <InfoBox
                title="Price in INR"
                value={`₹${bitcoinData.inr}`}
                change={`${bitcoinData.inr_24h_change.toFixed(2)}%`}
              />
            </div>
          )}
          <TrendingCoins />
        </div>
        <YouMayAlsoLike />
      </div>
    </div>
  );
};

export default App;
