import React, { useEffect, useState } from 'react';

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewImage, setReviewImage] = useState(null);

  useEffect(() => {
    const allReviews = JSON.parse(localStorage.getItem('productReviews')) || [];
    const filtered = allReviews.filter((r) => r.productId === productId);
    setReviews(filtered);
  }, [productId]);

  const handleTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      productId,
      text: reviewText,
      image: reviewImage,
    };

    const allReviews = JSON.parse(localStorage.getItem('productReviews')) || [];
    const updatedReviews = [...allReviews, newReview];
    localStorage.setItem('productReviews', JSON.stringify(updatedReviews));
    setReviews((prev) => [...prev, newReview]);
    setReviewText('');
    setReviewImage(null);
  };

  return (
    <div className='product-reviews'>
      <h2>Product Reviews</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={handleTextChange}
          placeholder="Write your review"
          required
        />
        <br />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id}>
              <p>{rev.text}</p>
              {rev.image && <img src={rev.image} alt="review" style={{ width: 100 }} />}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
