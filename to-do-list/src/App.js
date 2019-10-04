import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import DinamicList from './components/DinamicList';
import Button from './components/Button';

class App extends Component {
  state = {
    toDoList: ["hola", "adios"],
  };
  addToDoHandler = (toDo) => {
    this.setState({ toDoList: [...this.state.toDoList, toDo] }, () => {
      console.log('🤣', this.state.toDoList);
    });
  }

  deleteItem = itemIndex => {
    console.log('Index: ', itemIndex);
    this.state.toDoList.splice(itemIndex, 1);
    // this.setState({ startingContacts: this.state.startingContacts });
    this.setState({ toDoList: [...this.state.toDoList] });
  };

  doneItem = (itemIndex) => {
    console.log("Tachar Texto: ", itemIndex);

  }

  render() {

    return (
      <div className="App" >
        <AddToDo addToDo={this.addToDoHandler} />
        <DinamicList list={this.state.toDoList} deleteItem={this.deleteItem} doneItem={this.doneItem} />
      </div>
    );
  }
}

export default App;
