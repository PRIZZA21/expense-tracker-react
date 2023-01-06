import React , {createContext,useReducer} from 'react'; 
import { AppReducer } from './AppReducer';
//Initial state
const initialState = {
   
    transactions:  []
}

// Create Context
export const GlobalContext = createContext(initialState); // exported so that can be used by different components   

// Provider Component
export const GlobalProvider = ({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
//Actions
  function deleteTransaction(id)
  {
    dispatch({
        type:"DELETE_TRANSACTION",
        payload:id
    });
  }
  function addTransaction(transaction)
  {
    dispatch({
        type:"ADD_TRANSACTION",
        payload:transaction
    });
  }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,  // sincen state=initialstate so state.transactions
            addTransaction
        }}>
            {children}

        </GlobalContext.Provider>
    )


}
