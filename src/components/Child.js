import React from "react";

const Child = ({setSelectedOption,id})=>{


    const changeName =(e)=>{
        console.log(e.target.innerHTML);
        setSelectedOption(e.target.innerHTML)
    }

    return(
        <div className="child">
            <h2>Child Component {id}</h2>
            <button onClick={(e)=>changeName(e)} >Option {id}</button>
        </div>
    )
}

export default Child