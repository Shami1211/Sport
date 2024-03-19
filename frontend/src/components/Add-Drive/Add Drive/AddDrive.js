import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDrive = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    date: '',
    start: '',
    destination: '',
    time: '',
    type: '',
    number: 0,
    note: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/drives/', inputs); // Check if this is the correct endpoint
      navigate('/mydrives');
    } catch (error) {
      console.error('Error submitting drive:', error);
      // Handle error and provide feedback to the user
    }
  };
  

  return (
    <div>
      <h2>Add Drive </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={inputs.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={inputs.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Start Point:</label>
          <input type="text" name="start" value={inputs.start} onChange={handleChange} required />
        </div>
        <div>
          <label>Destination Point:</label>
          <input type="text" name="destination" value={inputs.destination} onChange={handleChange} required />
        </div>
        <div>
          <label>Start Time:</label>
          <input type="time" name="time" value={inputs.time} onChange={handleChange} required />
        </div>
        <div>
          <label>Vehicle Type:</label>
          <select name="type" value={inputs.type} onChange={handleChange} required>
            <option value="">Select Vehicle Type</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div>
          <label>Vehicle Number:</label>
          <input type="number" name="number" value={inputs.number} onChange={handleChange} required />
        </div>
        <div>
          <label>Note:</label>
          <input type="text" name="note" value={inputs.note} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDrive;
