import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Navigation from './components/Navigation';

import { todos } from './todos.json';

import TodoForm from './components/TodoForm';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this) // para no perder scope de este metodo

  }


  //  metodo para agregar tareas a todos.json

  handleAddTodo(todo){ // recibimos una tarea se actualiza el estado de la app
    this.setState({
      todos: [...this.state.todos, todo] // agregar una nueva tarea al estado de las tareas
    })// al TodoForm se le pasa esta funcion con el metodo de la etiqueta onAddTodo
  }



  render() {
  const todos = this.state.todos.map((todo, i) =>{
    // esto se ejecuta antes de mostrarlo 
      return(



        <div className="col-md-4">
            <div className="card mt-3">

              <div className="card-header">
                <h3>{ todo.title }</h3>
                <span className="badge badge-warning ml-2">
                  { todo.priority }
                </span>
              </div>
              <div className="card-body">
                <p>{ todo.description }</p>
                <p><mark> { todo.responsible } </mark></p>
              </div>
            </div>
        </div>


      )
    })
    return (
      <div className="App">
        <header className="App-header">   
             
           <nav className="navbar navbar-dark bg-dark">
              <a  className="text-white">
               Task
               <span className="badge badge-pill badge-light ml-2">
                 { todos.length }  
               </span>
              </a>
            </nav>


              <div className="container">
                <div className="row">
                  <div className="col-md-4 mt-3">
                     <TodoForm onAddTodo={this.handleAddTodo}/> {/* onAddTodo actualizar el estado con el metdo sumit handleSubmit */}
                  </div>
                  <div className="col-md-8 mt-3">
                    <div className="row">
                      { todos }  
                    </div>                    
                  </div>
                </div>
              </div>

              
              
          <img src={logo} className="App-logo" alt="logo" />
         
        </header>
      </div>
    );
  }
}

export default App;
