import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa6'

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const handleNameChange = (e:any) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e:any) => {
    setDescription(e.target.value);
  };

  const handleRatingChange = (value:any) => {
    setRating(value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Here you can handle the submission, for example send the data to an API
    console.log('Name:', name);
    console.log('Description:', description);
    console.log('Rating:', rating);
    // Reset the form fields after submission
    setName('');
    setDescription('');
    setRating(0);
  };

  return (
    <div className="feedback-form-section-spority">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder='Your Name'
            value={name}
            onChange={handleNameChange}
            required
          />
          <textarea
            id="description"
            value={description}
            placeholder='Your Feedback....'
            onChange={handleDescriptionChange}
            required
            rows={5}
          />
        <div className="rating">
          <label>Rating:</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleRatingChange(value)}
                className={`text-gray-400 px-1 ${
                  value <= rating ? 'text-yellow-500' : ''
                } focus:outline-none focus:ring-0`}
              >
                <FaStar />
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="feedback-btn-form-spority">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
