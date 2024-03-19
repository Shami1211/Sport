import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPost = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    date: '',
    title: '',
    caption: '',
    image: '',
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
    console.log(inputs);
    try {
      await axios.post('http://localhost:5000/posts/', inputs);
      navigate('/posts'); // Navigate to posts page after successful submission
    } catch (error) {
      console.error('Error submitting post:', error);
      // Handle error and provide feedback to the user
    }
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={inputs.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={inputs.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Caption:</label>
          <input type="text" name="caption" value={inputs.caption} onChange={handleChange} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={inputs.image} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPost;
