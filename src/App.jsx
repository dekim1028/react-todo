import React from 'react';
import List from './List';
import Input from './Input';
import './App.css';
import logo from './image/logo.png';

class App extends React.Component{
  state = {
    todoList : []
  };

  addTodo({title,description}){
    const {todoList} = this.state;

    this.setState({
      todoList: [...todoList,{
        title, description,
        completed:false,
        id: new Date().toString()
      }]
    });
  }

  removeTodo(){

  }

  render(){
    const {todoList} = this.state;

    return (
      <main>
          <div className="logo"><img src={logo}></img></div>
          <Input addTodo={this.addTodo.bind(this)}/>
          <List todoList={todoList}/>
      </main>
    )
  }
}


export default App;
