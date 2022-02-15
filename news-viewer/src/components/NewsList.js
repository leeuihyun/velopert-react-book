import React from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

function NewsList() {
  const [articles, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d5acc892bd7744ffbc8d2bcb88f9be49',
      );
      setArticle(response.data.articles);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d5acc892bd7744ffbc8d2bcb88f9be49',
      )
      .then((res) => {
        setArticle(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    //fetchData();
  }, []);
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
