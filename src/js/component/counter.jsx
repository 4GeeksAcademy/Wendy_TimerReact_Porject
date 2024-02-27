import React from "react";
import { useState, useEffect } from 'react';


//create your first component
export const TimeCount= (props)=> {

    const [counter, setCounter] = useState(57);
    const [counterM, setCounterM] = useState(0);

let  interval_sec;
let  interval_min;

  useEffect(() => {
     interval_sec = setInterval(() => {
      setCounter(counter+1);
     // setCounterM(Math.trunc(counter/60))
      if(counter==59){
        setCounter(0);
        setCounterM(counterM+1);
      }
  
    }, 1000);

    // interval_min = setInterval(() => {
    //  setCounterM(counterM+1);
    //  alert('test')
    // }, 5000);

    return () => {
      clearInterval(interval_sec);
      clearInterval(interval_min);
    }
  }, [counter,counterM]);



function stopCounter (){
 
clearInterval(interval_sec);
clearInterval(interval_min);

}

function startCounter (){
 
  interval_sec = setInterval(() => {
    setCounter(counter+1);
  }, 1000);

  interval_min = setInterval(() => {
    setCounter(counterM+1);
  }, 60000);
  
  }

  function resetCounter (){
    clearInterval(interval_sec);
     setCounter(0);
    interval_sec = setInterval(() => {
      setCounter(counter+1);
    }, 1000);
    }
    

	return	(


    <div class="container"> 
    <h1>Timer</h1> 
    <div id="time"> 
        <span class="digit" id="hr"> 
            00  </span> 
        <span class="txt">Hr  </span> 
        <span class="digit" id="min"> 
            00  </span> 
        <span class="txt">Min  </span> 
        <span class="digit" id="sec"> 
            {counterM} </span> 
        <span class="txt">Sec  </span> 
        <span class="digit" id="count"> 
            {counter}  </span> 
    </div> 
    <div id="buttons"> 
        <button class="btn" id="start" onClick={()=>startCounter()}> 
            Start</button> 
        <button class="btn" id="stop" onClick={()=>stopCounter()}> 
            Stop</button> 
        <button class="btn" id="reset" onClick={()=>resetCounter()}> 
            Reset</button> 
    </div> 
</div> 


    );
	
};
// export default TimeCount;


        