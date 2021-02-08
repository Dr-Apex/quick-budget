import React from 'react';
import Amount from './Amount';
import Mode from './Mode';
import './../style.css';

const Home = () => {
  return (
    <div className="container">
      <Amount
        header="Quick. Simple. Smart."
        text="Welcome to"
        title="Quick Budget"
      />
      <Mode />
      <div className="image" />
    </div>
  );
};

export default Home;
