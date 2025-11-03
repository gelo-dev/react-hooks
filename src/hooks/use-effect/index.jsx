import { useEffect, useState } from "react";

export const UseEffectExample = () => {
    const [ updatedData , setUpdateData ]= useState([]);

    const [ showEffect , setShowEffect ] = useState(false)

    useEffect(() =>{
        // console.log('THIS IS USE EFFECT');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> res.json())
        .then((json) => setUpdateData(json))
        
    }, [])

    useEffect(()=>{
       console.log('Test Single useEffect');
        
    },[]);

    return (
        <div>
            <h1>Post</h1>
                <button onClick={ () => setShowEffect((val) => !val)}>Toggle useEffect</button>
                <ul>
                    {updatedData.map((item)=>
                        <li key={item.id}>
                           {item.title} 
                        </li>
                    )}
                </ul>
        </div>
    );
};

// https://jsonplaceholder.typicode.com/posts