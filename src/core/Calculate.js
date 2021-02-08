import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Amount from './Amount';

let amount = 0;

const Manage = () => {
  const [amt, setAmt] = useState(0);
  const [desc, setDesc] = useState("");
  const [count, setCount] = useState(0);
  const [btn, setBtn] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  if (btn) {
    amount = Number(amount) + Number(amt);
    setBtn(false);
  }

  // Static List
  const values = [];
  for (var i = 0; i < count; i++) {
    values.push(
      <div className="card">
        <div className="card-header">
          <input placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
          <input style={{"display" : "none"}} placeholder="Description" value={desc} />
        </div>
        <div className="card-body manage">
          <input
            className="card-title"
            placeholder="Amount"
            onChange={(e) => setAmt(e.target.value)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card text-white bg-primary mb-3 back">
        <Link to="/">Back</Link>
      </div>
      <Amount
        text="Total"
        title={amount}
      />
      <div className="image" />
      {values}
      <div className="add">
        {showBtn ?
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setCount(count + 1);
              setShowBtn(false);
            }}
          >
            Add
          </button>
          :
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              setBtn(true);
              setShowBtn(true);
            }}
          >
            Go
          </button>
        }
      </div>
    </div>
  );
};

export default Manage;
