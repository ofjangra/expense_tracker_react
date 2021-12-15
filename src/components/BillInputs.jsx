import React, {useState} from 'react'

let MainArray = [{
  id: 1,
  title: "Sold Phone",
  amount: "7000",
  type: "debit"
},
{
id: 2,
title: "Bought grocery",
amount: "400",
type: "credit"
},
{
id: 2,
title: "Bought grocery",
amount: "400",
type: "credit"
}
]


const BillInputs = () => {
  const [billID, setBillID] = useState(1);
  
  const [formInputs, setFormInputs] = useState({
    id: billID,
    title: "",
    amount: "",
    type: ""
  });
  const onChangeInput = (e) =>{
    let value = e.target.value;
    let name = e.target.name;

    setFormInputs((prevalue) =>{
      if(name === "title"){
        return{
          id: billID,
          title: value,
          amount: prevalue.amount,
          type: ""
        }
      }
      if(name === "amount"){
        return{
          id: billID,
          title: prevalue.title,
          amount: value,
          type:""
        }
      }
    })
  }
  const addCredit = (e) =>{
    e.preventDefault();
    MainArray.push({id: billID, title: formInputs.title, amount: formInputs.amount, type: "credit"});
    console.log(MainArray)
    setBillID(billID+1);
  }
    return (
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
        <form>
        <div className="addnewBill" id="newBill">
       
          <div className="billInput">
          <p className="billID">Bill ID: {billID}</p>
            <p className="billTitle">
              <label htmlFor="billTitle">Title</label>
            </p>

            <textarea id="billTitle" 
            name = "title"
            value = {formInputs.title}
            onChange={onChangeInput} />

            <label htmlFor="amount">Amount</label>

            <input type="number" id="amount"
            name='amount'
            value= {formInputs.amount}
             onChange={onChangeInput}></input>
          </div>

          
          <div className="buttons" id="buttons">
          <label htmlFor="buttons">Add To</label>
            <div className="buttonTypes">
              <button type="submit" onClick = {addCredit}>Credits</button>
              <button type="submit" >Debits</button>
            </div>
          </div>

        </div>
        </form>
      </div>
    )
}

export default BillInputs
export {MainArray}
