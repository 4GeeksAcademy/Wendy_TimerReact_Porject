import React from "react";
import { useState, useEffect } from 'react';



//create your first component
export const TimeCount= ()=> {

    const [counter, setCounter] = useState(0);
    const [counterM, setCounterM] = useState(0);
    const [counterH, setCounterH] = useState(0);

let  interval_sec;

  useEffect(() => {
     interval_sec = setInterval(() => {
      setCounter(counter+1);
      if(counter==59){
        if(counterM==59){
          setCounterM(0);
          setCounter(0);
          setCounterH(counterH+1);
         
        }
        else{
        setCounter(0);
        setCounterM(counterM+1);
      }
    }
  
    }, 1000);


    return () => {
      clearInterval(interval_sec);
   
    }
  }, [counter,counterM]);



function stopCounter (){
 
clearInterval(interval_sec);


}

function startCounter (){
 
  interval_sec = setInterval(() => {
    setCounter(counter+1);
    if(counter==59){
      setCounter(counter+1);
      setCounterM(counterM+1);
    }else{
      setCounter(counter+1);
    }
  }, 1000);

 
  }

  function resetCounter (){
    setCounter(0);
    setCounterM(0);
    setCounterH(0);
    clearInterval(interval_sec);

    }
    
    

	return	(


    <div class="container"> 
    <h1>Timer</h1> 
    <div id="time"> 
        <span class="digit" id="hr"> 
            00  </span> 
        <span class="txt">Hr  </span> 
        <span class="digit" id="min"> 
            {counterH}  </span> 
        <span class="txt">Min  </span> 
        <span class="digit" id="sec"> 
            {counterM} </span> 
        <span class="txt">Sec  </span> 
        <span class="digit" id="count"> 
            {counter} </span> 
    </div> 
    <div id="buttons"> 
        <button class="btn" id="start" onClick={()=>startCounter()}> 
        <i class="fas fa-play"></i></button> 
        <button class="btn" id="stop" onClick={()=>stopCounter()}> 
        <i class="fa-solid fa-stop"></i></button> 
        <button class="btn" id="reset" onClick={()=>resetCounter()}> 
        <i class="fa-solid fa-repeat"></i></button> 
            <button class="btn btn-dark"  onClick={()=>resetCounter()}> 
            R</button> 
         
    </div> 
</div> 


    );
	
};
// export default TimeCount;


        