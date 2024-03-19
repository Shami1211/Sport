import React from 'react';

const Stock = (props) => {
  const { _id, name, qty, size, date, company, price } = props.stock;

  return (
    <div>
      <h2>{name}</h2>
      <p>Quantity: {qty}</p>
      <p>Size: {size}</p>
      <p>Date: {date}</p>
      <p>Company: {company}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default Stock;
