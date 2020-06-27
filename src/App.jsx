import React from 'react';
import List from './List';
import Input from './Input';

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
        <h1>TODO LIST</h1>
        <Input addTodo={this.addTodo.bind(this)}/>
        <List todoList={todoList}/>
      </main>
    )
  }
}


export default App;
