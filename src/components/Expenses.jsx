import React, {useState} from "react";

let MainArray = []

const Expenses = () => {
  const [billID, setBillID] = useState(1);
  const [bill, setBill] = useState(MainArray);
  const [totalCrdits, setTotalCredits] = useState(0)
  const [totalDebits, setTotalDebits] = useState(0)
  const totalCreditsArray = [];
  const totalDebitsArray = [];
  const addTotal = (totals,array, setToValues) =>{
    let x  = totals+array[array.length-1];
    setToValues(x)
  }
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
          amount: parseInt(value),
          type:""
        }
      }
    })
  }

  
  const addCredit = (e) =>{
    e.preventDefault();
    MainArray.splice(0, 0, {id: billID, title: formInputs.title, amount: formInputs.amount, type: "credit"});
    totalCreditsArray.push(formInputs.amount)
    addTotal(totalCrdits, totalCreditsArray, setTotalCredits);
    setBill(MainArray);

    setBillID(billID+1);
    setFormInputs({id: "", title: "", amount: "", type: ""});
  }
const addDebits = (e) =>{
  e.preventDefault();
  MainArray.splice(0, 0, {id: billID, title: formInputs.title, amount: formInputs.amount, type: "debit"});
  totalDebitsArray.push(formInputs.amount)
  addTotal(totalDebits, totalDebitsArray, setTotalDebits);
  setBill(MainArray);
  setBillID(billID+1);
  setFormInputs({id: "", title: "", amount: "", type: ""});
}
  return (
    <div className="main">

      <div className="header">
        <p>Expense Tracker</p>
      </div>

      <div className="counter">

        <div className="billLists">
            {bill.map((values) =>{
              return(
                <div className="bill" style={values.type === "debit" ? {borderLeft: "4px solid #c50b0b"} : {borderLeft: "4px solid #0eb84f"}} key={values.id}>
                  <p>{values.id}</p>
                  <p>{values.title}</p>
                  <h2>{values.amount}</h2>
                </div>
                  )
                }
            )
          }
        </div>

        <div className="billCalcs">
        <div className="totals">
          <div className="TotalEarnings">
            <label htmlFor="earnings">Total Earnings</label>
            <h2 id="earnings">{totalCrdits}</h2>
          </div>
          <div className="TotalSpendings">
            <label htmlFor="spendings">Total Spendings</label>
            <h2 id="spendings">{totalDebits}</h2>
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
              { (formInputs.amount === "" || formInputs.title === "") ? 
              <button style={{opacity: "30%", cursor: "not-allowed"}} onClick={(e) =>e.preventDefault()}>Credits</button> :
               <button type="submit" onClick = {addCredit}>Credits</button>}


              {(formInputs.amount === "" || formInputs.title === "") ? 
              <button style={{opacity: "30%", cursor: "not-allowed"}} onClick={(e) =>e.preventDefault()}>Credits</button> :
                <button type="submit" onClick={addDebits}>Debits</button>}
            </div>
          </div>

        </div>
        </form>
      </div>


      </div>
    </div>
  );
};

export default Expenses;
