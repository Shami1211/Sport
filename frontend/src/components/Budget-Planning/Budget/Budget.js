import React from 'react'

const Budget = (props)=> {
    //const history = useNavigate();
    const { _id, date, name, deposit, exprend, saving } = props.budget;
    
  
  return (
    <div>
        <h1>{date}</h1>
        <h2>{name}</h2>
        <h4>{deposit}</h4>
        <h4>{exprend}</h4>
        <h3>{saving}</h3>
    </div>
  )
}

export default Budget;