import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import axios from 'axios';

const AddBudget = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    date: '',
    name: '',
    deposit: '',
    exprend: '',
    saving: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleExprendChange = (e) => {
    const depositAmount = parseFloat(inputs.deposit);
    const exprendAmount = parseFloat(e.target.value);
    const savingsAmount = depositAmount - exprendAmount;
    setInputs((prevState) => ({
      ...prevState,
      exprend: e.target.value,
      saving: savingsAmount.toFixed(2),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      await axios.post('http://localhost:5000/budgets/', inputs);
      history('/budgets'); // Navigate to budgets page after successful submission
    } catch (error) {
      console.error('Error submitting budget:', error);
      // Handle error and provide feedback to the user
    }
  };

  return (
    <div>
      <h2>Add Budget</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={inputs.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={inputs.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Deposit Amount (LKR):</label>
          <input type="number" name="deposit" value={inputs.deposit} onChange={handleChange} required />
        </div>
        <div>
          <label>Expenditure Amount (LKR):</label> {/* Corrected label spelling */}
          <input type="number" name="exprend" value={inputs.exprend} onChange={handleExprendChange} required />
        </div>
        <div>
          <label>Final Savings Amount (LKR):</label>
          <input type="number" name="saving" value={inputs.saving} readOnly />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBudget;
