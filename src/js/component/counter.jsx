import React from "react";
import { useState, useEffect } from 'react';


//create your first component
export const TimeCount= (props)=> {

    const [counter, setCounter] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
        setCounter(counter+1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


	return	(

        <div><h1>{counter}</h1></div>
    );
	
};
// export default TimeCount;

