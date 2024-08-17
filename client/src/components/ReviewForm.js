import React, { useState } from 'react';

const ReviewForm = ({ productId, onSubmit }) => {
  const [review, setReview] = useState({ rating: 0, comment: '' });

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(productId, review);
    setReview({ rating: 0, comment: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <input type="number" name="rating" value={review.rating} onChange={handleChange} min={0} max={5} />
      </label>
      <br />
      <textarea
        name="comment"
        value={review.comment}
        onChange={handleChange}
        placeholder="Write your review here..."
      />
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;