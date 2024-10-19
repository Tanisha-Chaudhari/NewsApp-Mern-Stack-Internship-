import React from 'react';
import './NewsCard.css';

const NewsCard = ({ title, date, image }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-image" />
      <div className="news-content">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
