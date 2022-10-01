import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  //store fetched data in a state
  const [transactions, setTransactions] = useState([]) //starting with an empty array
  // use useEffect hook
  useEffect(() => {
    //fetch data
    fetch("http://localhost:3000/transactions")
    .then(resp => resp.json())
    .then(transac => setTransactions(transac))
      // console.log(transac)) // to confirm the fetch works
  },[]) // pass dependency array

  console.log(transactions)


  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
