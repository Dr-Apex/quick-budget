import React from 'react';

const Amount = ({header, text, title}) => {
  return (
    <div className="card text-white bg-primary mb-3">
      <div className="card-header">{header}</div>
      <div className="card-body">
        <p className="card-text">{text}</p>
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default Amount;
