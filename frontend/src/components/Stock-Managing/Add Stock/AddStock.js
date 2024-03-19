import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddStock.css'; // Import your CSS file

const AddStock = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    qty: '',
    size: '',
    date: '',
    company: '',
    price: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validate if the input is a number and greater than zero
    if ((name === 'qty' || name === 'size' || name === 'price') && (isNaN(value) || parseFloat(value) <= 0)) {
      setError('Invalid input. Please enter a valid number greater than zero.');
      return;
    }
    setError('');
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e) => {
    const size = parseFloat(e.target.value);
    const qty = parseFloat(inputs.qty);
    const totalPrice = size * qty;
    setInputs((prevState) => ({
      ...prevState,
      size: e.target.value,
      totalPrice: totalPrice.toFixed(2),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseFloat(inputs.qty) <= 0 || parseFloat(inputs.size) <= 0 || parseFloat(inputs.price) <= 0) {
      setError('Quantity, size, and price must be greater than zero.');
      return;
    }
    console.log(inputs);
    try {
      await axios.post('http://localhost:5000/stocks/', inputs);
      history('/stocks'); // Navigate to stocks page after successful submission
    } catch (error) {
      console.error('Error submitting stock:', error);
      // Handle error and provide feedback to the user
    }
  };

  return (
    <div className="stock-container">
      <h2 className="stock-header">Add New Items</h2>
      <form className="stock-form" onSubmit={handleSubmit}>
        <div className="stock-left">
          <div>
            <label className="stock-label">Name:</label>
            <input className="stock-input" type="text" name="name" value={inputs.name} onChange={handleChange} required />
          </div>
          <div>
            <label className="stock-label">Size:</label>
            <input className="stock-input" type="number" name="size" value={inputs.size} onChange={handleSizeChange} required />
          </div>
          <div>
            <label className="stock-label">Company:</label>
            <input className="stock-input" type="text" name="company" value={inputs.company} onChange={handleChange} required />
          </div>
        </div>
        <div className="stock-right">
          <div>
            <label className="stock-label">Quantity:</label>
            <input className="stock-input" type="number" name="qty" value={inputs.qty} onChange={handleChange} required />
          </div>
          <div>
            <label className="stock-label">Date:</label>
            <input className="stock-input" type="date" name="date" value={inputs.date} onChange={handleChange} required />
          </div>
          <div>
            <label className="stock-label">Price:</label>
            <input className="stock-input" type="number" name="price" value={inputs.price} onChange={handleChange} required />
          </div>
        </div>
        {error && <p className="stock-error-message">{error}</p>}
        <button className="stock-add-btn" type="submit">Add New Item</button>
      </form>
    </div>
  );
};

export default AddStock;
