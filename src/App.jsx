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

    const todoID = new Date().toString();

    this.setState({
      todoList: [...todoList,{
        title, description,
        completed:false,
        id: todoID
      }]
    });

    return todoID;
  }

  toggleTodoStatus(todoId) {
    const targetIndex = this.state.todoList.findIndex(
      ({ id }) => id === todoId
    );

    const { todoList } = this.state;
    const changedTodo = {
      ...todoList[targetIndex],
      completed: !todoList[targetIndex].completed
    };

    todoList.splice(targetIndex, 1, changedTodo);

    this.setState({
      todoList
    });
  }

  saveLocalStorage(title, description, id){
    
  }

  removeTodo(todoId){
    const { todoList } = this.state;
    this.setState({
      todoList:todoList.filter(list => list.id !== todoId)
    });
  }

  updateTodo(){
  }

  render(){
    const {todoList} = this.state;

    return (
      <main>
          <div className="logo"><img src={logo} alt="TODO"></img></div>
          <Input addTodo={this.addTodo.bind(this)} saveLocalStorage={this.saveLocalStorage.bind(this)}/>
          <List
            toggleTodoStatus={this.toggleTodoStatus.bind(this)}
            removeTodo={this.removeTodo.bind(this)}
            updateTodo={this.updateTodo.bind(this)}
            todoList={todoList}/>
      </main>
    )
  }
}


export default App;
