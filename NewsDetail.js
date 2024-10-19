import React from 'react';
import './NewsDetail.css';

const NewsDetail = ({ title, content, image }) => {
  return (
    <div className="news-detail">
      <h2>{title}</h2>
      <img src={image} alt={title} className="detail-image" />
      <p>{content}</p>
      <div className="actions">
        <i className="fas fa-thumbs-up"></i>
        <i className="fas fa-bookmark"></i>
        <i className="fas fa-share"></i>
      </div>
    </div>
  );
};

export default NewsDetail;
