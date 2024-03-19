import React from 'react'

const Drive = (props)=> {
    //const history = useNavigate();
    const { _id, name, date, start, destination, time, type, number, note  } = props.drive;
    
  
  return (
    <div>
        <h2>{name}</h2>
        <h1>{date}</h1>
        <h4>{start}</h4>
        <h4>{destination}</h4>
        <h4>{time}</h4>
        <h4>{type}</h4>
        <h4>{number}</h4>
        <h4>{note}</h4>
        
    </div>
  )
}

export default Drive;