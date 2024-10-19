import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import NewsDetail from './components/NewsDetail';
import Form from './components/Form';

function App() {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  const handleFormSubmit = (newNews) => {
    setNews([...news, newNews]);
  };

  return (
    <div className="app">
      <Header />
      {selectedNews ? (
        <NewsDetail
          title={selectedNews.title}
          content={selectedNews.description}
          image={selectedNews.image}
        />
      ) : (
        <div className="news-list">
          {news.map((newsItem, index) => (
            <NewsCard
              key={index}
              title={newsItem.title}
              date="29/09/2024"
              image={newsItem.image}
              onClick={() => setSelectedNews(newsItem)}
            />
          ))}
        </div>
      )}
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
