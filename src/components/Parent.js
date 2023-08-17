import React, { useState } from "react";
import Child from './Child'

const Parent =()=>{

    let [selectedOption, setSelectedOption] = useState()

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child setSelectedOption={setSelectedOption} id={1}/>
            <Child setSelectedOption={setSelectedOption} id={2}/>
            <p>Selected Option: {selectedOption && selectedOption}</p>
        </div>
    )
}

export default Parent