import React from 'react';
import './App.css';
import FabButton from './components/FabButton';
import TopBar from './components/TopBar';
import List from './components/List';

class App extends React.Component {
  render() {
    return [
      <TopBar />,
      <List />,
      <FabButton />
    ]
  }
}

export default App;
