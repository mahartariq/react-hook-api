import React,{useState} from 'react';


function Age (){
    const [age, SetAge] = useState(19);
    const handleclick = ()=> SetAge(age+1)
    return(
    <div>
        <p>I'm {age} Years Old</p>
        <button onClick={handleclick}>Click Me</button>
    </div>)
};

export default Age;