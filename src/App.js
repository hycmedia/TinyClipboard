import React from 'react';
import './App.css';
import FabButton from './components/FabButton';
import TopBar from './components/TopBar';
import List from './components/List';
import TextDialog from "./components/TextDialog";
import SnackBar from "./components/SnackBar";

class App extends React.Component {

    dialog;
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
                <TextDialog title={"Paste it!"} name={"paste"} onSubmit={this.handleAddNote.bind(this)} />
                <TextDialog title={"Paste in here"} name={"create"} onSubmit={this.handleAddNote.bind(this)} />
                <TopBar/>
                <SnackBar text={"Copied to your clipboard 😁"} name={"copied"} />
                <List list={this.notes}/>
                <FabButton/>
            </div>
        )
    }
}

export default App;
