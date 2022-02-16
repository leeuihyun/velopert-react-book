import React from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useState, useCallback } from 'react';
import NewsPage from './pages/NewsPage';
import { Route } from 'react-router-dom';
function App() {
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
