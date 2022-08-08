  const initialstate={
    counter:0
  }
   const reducer = (state= initialstate, action)=>{
       console.log("stateee",action.type)
       

    switch(action.type){
      case "INCREASE":
        return{
            ...state,
           counter: state.counter+1
        } 
      case "DECREASE":
        return{
            ...state,
           counter: state.counter-1
        } 
   
      default:
        return state;
    }
  }

  export default reducer


  