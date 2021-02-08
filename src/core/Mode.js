import React from 'react';
import {Link} from 'react-router-dom';

const Mode = () => {
  return (
    <div className="mode">
      <div className="mode-box">
        <p>Enter the budget and manage.</p>
        <div className="mode-btn">
          <button type="button" className="btn">
            <Link to="/manage">GO</Link>
          </button>
        </div>
      </div>
      <h2>OR</h2>
      <div className="mode-box">
        <p>Calculate budget.</p>
        <div className="mode-btn">
          <button type="button" className="btn">
            <Link to="/calculate">GO</Link>
          </button>
        </div>
      </div>
    </div>
  );

};
export default Mode;
