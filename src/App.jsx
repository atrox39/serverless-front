import { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './components/Task';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const chargeData = () => {
    axios.create({
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).get('/tasks').then((response) => {
      setTasks(response.data.body.tasks);
    });
  };

  useEffect(() => {
    chargeData();
  });

  return (
    <div>
      { tasks && tasks.map(({
        id, title, description, done,
      }) => (<Task key={id} id={id} title={title} description={description} done={done} />))}
    </div>
  );
}

export default App;
