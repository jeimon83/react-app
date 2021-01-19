import React, { Component } from 'react';
import './App.css';
import tasks from './samples/tasks.json';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';



class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
   return <div>
        { 
          this.state.tasks.map(t => <h1>{t.title} {t.description}</h1>) }
      </div>   
  }
}

export default App;
