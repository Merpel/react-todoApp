
import React from "react";
import TodoItem from "./components/TodoItem";
import todoList from "./todoList";
import FormComponent from "./components/FormComponent";
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todoList,
            text: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCheck(id) {
        this.setState(prevState => {
            const updatedList = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
            return {
                todos: updatedList
            };
        });
    }


    handleChange(event) {
        const { name, value} = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
    event.preventDefault();
    const newList = this.state.todos;
    let obj = {
      id: this.state.todos.length +1,
      text: this.state.text,
      completed: false
    }
    if(this.state.text !== "") newList.push(obj) 
    this.setState({todos:newList, text:""})
  }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem todo={item} key={item.id} handleChange={this.handleCheck} />);
        return (
            <div>
              <h1 className="head">List of todos</h1>
                <div className="todo-list">
                    {todoItems}
                </div>
                <FormComponent handleSubmit={this.handleSubmit} handleChange={this.handleChange} data={this.state} />
            </div>
        )
    }
}

export default App