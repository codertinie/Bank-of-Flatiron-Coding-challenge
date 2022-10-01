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
  setTransactions(transactions => [...transactions, newTransaction])//add it to transactions
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
