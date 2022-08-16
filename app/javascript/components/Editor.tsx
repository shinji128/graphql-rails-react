import React, { useState, useEffect } from 'react';
import Header from './Header';
import TaskList from './TaskList';

const Editor = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch('/api/tasks');
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      {isError && <p>Something went wrong. Check the console.</p>}

      {isLoading ? <p>Loading...</p> : <TaskList tasks={tasks} />}
    </>
  );
};

export default Editor;
