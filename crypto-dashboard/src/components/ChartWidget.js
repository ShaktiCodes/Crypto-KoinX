import React from 'react';

const ChartWidget = () => (
  <div className="chart-widget">
    <iframe
      src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_56cda&symbol=BITSTAMP%3ABTCUSD"
      width="100%"
      height="400"
      frameBorder="0"
      allowTransparency="true"
      scrolling="no"
    ></iframe>
  </div>
);

export default ChartWidget;
