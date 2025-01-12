import React, { useEffect, useState } from 'react';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((response) => response.json())
      .then((data) => setTrendingCoins(data.coins));
  }, []);

  return (
    <div className="trending-coins">
      <h2>Trending Coins (24h)</h2>
      <div className="trending-list">
        {trendingCoins.slice(0, 3).map((coin) => (
          <div key={coin.item.id} className="coin">
            <img src={coin.item.small} alt={coin.item.name} />
            <p>{coin.item.name}</p>
            <p>${coin.item.price_btc.toFixed(6)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
