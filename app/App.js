import React, { Component } from 'react';
import logo from './meo.png';
import './App.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="meo" />
          <h1 className="App-title">Welcome to the world of Cats</h1>
        </header>
        <p className="App-intro">
         Hello everybody!!!
        </p>
      </div>
    );
  }
}
/*
class myTodoApp extends Component {
    render(){
        return (
            <div className="header">
                <from className="create">
                    <TextInput changeText={(text)=> this.setState({text})} id={"inputAdd"} type={"text"}  placeholder={"Look for cats..."}>
                    <button type={"button"} id = {"buttonAdd"}>Add</button>
                </from>
            </div>
        );
    }
}

class listTodo extends Component {
    render(){
        return(
            <div className="main">
                <ul id="list">
                    <li>"cat's England short bristle"<span className="close">x</span>
                    <li>"cat's England long bristle"<span className="close">x</span>
                    <li>"Tattooed cat"<span className="close">x</span>
                    <li>"Persian cat"<span className="close">x</span>
                </ul>
            </div>
        );
    }
}
*/

export default App;