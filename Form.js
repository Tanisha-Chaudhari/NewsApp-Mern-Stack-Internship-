import React, { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, image });
    setTitle('');
    setDescription('');
    setImage('');
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <label>News Title</label>
      <input
        type="text"
        placeholder="Enter the news title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Description</label>
      <textarea
        placeholder="Enter the news description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label>Image</label>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
