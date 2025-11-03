import { useState } from "react";

export const StateExample = ()=>{
    // let count = 0;

    const [count , setCount] = useState(0);


    const increaseCount = () => {
        setCount((prevValOfCount)=> prevValOfCount + 1)

        console.log(count);
        
        
    };

    return (
        <div>
            <p> Count :{count} </p>
            <button onClick={increaseCount}>Increase Counter</button>
        </div>
    ); 
};
