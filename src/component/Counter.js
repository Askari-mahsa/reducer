import React from 'react';
import { connect } from "react-redux";
import { increase } from './action';
import { decrease } from './action';
// import { increase } from '.';
const Counter = (props) => {
    console.log("proops",props)
    return (
        <div>
            <h1>counter - {props.counter}</h1>
            <button onClick={props.increase} >counter Up</button>
            <button onClick={props.decrease} >counter Down</button>
        </div>
    );
};

const mapStateToProps = state =>{
    console.log("statteee",state)
    return {
           counter:state.counter
    }
}
const mapDispatchToProps= dispatch=>{
      console.log("hhhhh",dispatch)
      return{
        increase :()=> dispatch(increase()),
          decrease :()=> dispatch(decrease())
      }
  }
  


export default connect(mapStateToProps,mapDispatchToProps)(Counter);