import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

// or we can also use props.transaction.text if we pass (props) in function
const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext);
  
    return (
    <li className={transaction.amount<0?'minus':'plus'}>
        {transaction.text}<span>{sign}₹{Math.abs(transaction.amount)}</span><button onClick={()=>{deleteTransaction(transaction.id)}}className="delete-btn">x</button>
    </li>
  )
}

export default Transaction
