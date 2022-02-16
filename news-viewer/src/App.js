import React from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useState, useCallback } from 'react';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((item) => {
    setCategory(item);
  }, []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
}

export default App;
