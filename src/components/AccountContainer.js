import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
//store fetched data in a state
const [transactions, setTransactions] = useState([]) //starting with an empty array
// use useEffect hook
useEffect(() => {
  //fetch data
  fetch("http://localhost:8001/transactions")
  .then((resp) => resp.json())
  .then(transc => {
    setTransactions(transc)
  })
    // console.log(transac)) // to confirm the fetch works
},[]) // pass dependency array

function handleUpdate(newTransaction){
  console.log(newTransaction) // check for errors
  //add it to transactions
// add a new post to add data to server
//Post requires server options
  const serverOptions = {
    method : "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(newTransaction)
  }
  //ensures the data persists
  fetch("http://localhost:8001/transactions", serverOptions)// pass it as second argument
  .then(resp => resp.json())
  .then(newItem => setTransactions(transactions => [...transactions, newItem]))
}



  return (
    <div>
      <Search />
      <AddTransactionForm onSubmission={handleUpdate}/>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
