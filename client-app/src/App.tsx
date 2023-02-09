import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map((activitiy: any) => (
          <List.Item key={activitiy.id}>{activitiy.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
