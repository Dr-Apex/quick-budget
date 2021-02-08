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
  const [budget, setBudget] = useState(null);
  const [showBudget, setShowBudget] = useState(false);

  if (btn) {
    amount = Number(amount) + Number(amt);
    setBtn(false);
  }

  // Static List
  const values = [];
  for (var i = 0; i < count; i++) {
    values.push(
      <div className="card component">
        <div className="card-header">
          <input placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
        </div>
        <div className="card-body manage">
          <input
            className="card-title"
            type="number"
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
      {showBudget ?
        null :
        <>
          <div className="card text-white mb-3">
            <input
              className="card-text budget"
              type="number"
              placeholder="Budget"
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <div className="add">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                setShowBudget(true);
              }}
            >
              Go
            </button>
          </div>
        </>
      }
      <Amount
        header={"Total Rs." + budget}
        text="Remaining"
        title={budget - amount}
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
