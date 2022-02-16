import React from 'react';
import { useState, useEffect } from 'react';

function usePromise(promiseCreator, deps) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [loading, resolved, error];
}

export default usePromise;
