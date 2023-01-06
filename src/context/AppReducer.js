export  const AppReducer=(state,action)=>{
    switch(action.type){
        case "DELETE_TRANSACTION":
            return {
                ...state, // spreads takes out all value from state and puts it here
                transactions: state.transactions.filter(transaction=>transaction.id!==action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload,...state.transactions]// adds another element in a spread array
            }
        
        default: 
           return state;
    }
}