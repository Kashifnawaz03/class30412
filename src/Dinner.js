import React from 'react';
import Dinner from './dinner.css';

function Dinner (props){
    return <div><h1>I am working {props.myName}</h1>
    <div><h2>Successful this time {props.feeling}</h2>
    <div><h3>Very happy now {props.why}</h3></div>
    </div>
    </div>
       
       
}
export default Dinner;