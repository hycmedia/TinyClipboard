import React from 'react';
import './App.css';
import FabButton from './components/FabButton';
import TopBar from './components/TopBar';
import List from './components/List';
import Dialog from "./components/Dialog";

class App extends React.Component {
  render() {
    return (
       <div>
         <Dialog/>
        <TopBar />
        <List />
        <FabButton />
       </div>
    )
  }
}

export default App;
