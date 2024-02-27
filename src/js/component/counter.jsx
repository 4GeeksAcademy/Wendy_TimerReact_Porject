import React from "react";
import { useState, useEffect } from 'react';


//create your first component
export const TimeCount= (props)=> {

    const [counter, setCounter] = useState(0);
  //   const interval = setInterval(() => {
  //     setCounter(counter+1);
  // }, 1000);
let  interval;

  useEffect(() => {
     interval = setInterval(() => {
      setCounter(counter+1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);



function stopCounter (){
 
clearInterval(interval);

}

function startCounter (){
 
  interval = setInterval(() => {
    setCounter(counter+1);
  }, 1000);
  
  }

  function resetCounter (){
    clearInterval(interval);
     setCounter(0);
    interval = setInterval(() => {
      setCounter(counter+1);
    }, 1000);
    }
    

	return	(



       <div><h1>{counter}</h1>
       <button type="button" onClick={()=>stopCounter()} class="btn btn-success">Stop</button>
       <button type="button" onClick={()=>startCounter()} class="btn btn-secondary">Start</button>
       <button type="button" onClick={()=>resetCounter()} class="btn btn-secondary">Reset</button>
       </div>
    );
	
};
// export default TimeCount;



        
{/* <div class="col-3">
<div class="card bg-success text-white">
<h3 class="card-title text-center">
<div class="d-flex flex-wrap justify-content-center mt-2">
<a><span class="badge hours"></span></a> :
<a><span class="badge min"></span></a> :
<a><span class="badge sec">{counter}</span></a>
</div>
</h3>
</div>
</div>
<div class="col-3">
<button type="button" onClick={stopCounter()} class="btn btn-success">Stop</button>
</div>
<div class="col-3">
<button type="button" class="btn btn-secondary">Reset</button>
</div>
</div> */}