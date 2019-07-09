import React from 'react';
import './App.css';
import FabButton from './components/FabButton';
import TopBar from './components/TopBar';
import List from './components/List';
import TextDialog from "./components/TextDialog";

class App extends React.Component {

    static dialog;
    notes = [];

    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    handleAddNote(note) {
        this.notes.push(note);
        console.log(this.state.notes);
        this.setState({
         notes: this.notes
        }
    )
    }

    render() {
        return (<div>
                <TextDialog title={"Create new note"} name={"create"} onSubmit={this.handleAddNote.bind(this)} />
                <TopBar/>
                <List list={this.notes}/>
                <FabButton/>
            </div>
        )
    }
}

export default App;
