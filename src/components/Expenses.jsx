import React from "react";
import Bill from "./Bill";
const Expenses = () => {
  return (
    <div className="main">
      <div className="header">
        <p>Expense Tracker</p>
      </div>
      <div className="counter">
        <div className="billLists">
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
         <Bill />
        </div>
        <div className="billCalcs">
          <div className="totals">
            <div className="TotalEarnings">
              <label htmlFor="earnings">Total Earnings</label>
              <h2 id="earnings">760</h2>
            </div>
            <div className="TotalSpendings">
              <label htmlFor="spendings">Total Spendings</label>
              <h2 id="spendings">500</h2>
            </div>
          </div>
          <p className="newBill">
            <label htmlFor="newBill">Add New Bill</label>
          </p>
          <div className="addnewBill" id="newBill">
            <div className="billInput">
              <p className="billTitle">
                <label htmlFor="billTitle">Title</label>
              </p>

              <textarea id="billTitle"></textarea>
              <label htmlFor="amount">Amount</label>
              <input type="number" id="amount"></input>
            </div>

            
            <div className="buttons" id="buttons">
            <label htmlFor="buttons">Add To</label>
              <div className="buttonTypes">
                <button type="submit">Credits</button>
                <button type="submit">Debits</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
