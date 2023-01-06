import React,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);// used destructring to get an array of transactions

  
  
  
  // transaction is passed as a prop in Transaction component so that we know
  // what transaction we dealing with
  // thr transaction is recieved from the .map(transaction)
  return (
    <>
      <h3>History</h3>
      <ul  className="list">
         {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>))}
         
      </ul>
    </>
  )
}

export default TransactionList
