import React, {Component} from 'react';


class TodoForm extends Component {
	constructor(){
		super();
		this.state = {
			title: '',
			responsible: '',
			description: '',
			priority: 'low'
		};
		this.handleInputChange = this.handleInputChange.bind(this); 
		// para poder llamar el componente con this y que sea del propio componente
		this.handleSubmit = this.handleSubmit.bind(this); // para poder llamarlo

	}

	handleInputChange(e){ //se ejecuta cada vez que hay un cambio en el input
		const {value,name} = e.target;
		this.setState({ // metodo para modificar los datos
			[name]: value
		})

		// console.log(this.state) // cambia el estado dcuando se le agregan las palbras
	}	


handleSubmit(e){ //cada vez que se le de enviar al formulario se ejecuta este metodo 
 e.preventDefault(); // evita que se recargue la página
 this.props.onAddTodo(this.state) //actualizar el estado 
 // console.log(this.state)

}


	render() {
		return(
			<div className="card">
        <form className="card-body" onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={this.handleInputChange}
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              onChange={this.handleInputChange}
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>


		)
	}


}

export default TodoForm;