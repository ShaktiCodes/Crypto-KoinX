import React from 'react';

const InfoBox = ({ title, value, change }) => (
  <div className="info-box">
    <h3>{title}</h3>
    <p>{value}</p>
    <p style={{ color: change > 0 ? 'green' : 'red' }}>{change}</p>
  </div>
);

export default InfoBox;
