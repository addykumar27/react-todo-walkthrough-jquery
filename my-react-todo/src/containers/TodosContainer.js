import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import TodoList from '../components/TodoList'
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
	constructor (){
		super()
		this.state = {
			todos:[]
		}
	}
	componentDidMount() {
       this.fetchData()
	}

	
 	fetchData(){
    	TodoModel.all().then( (res) => {
      	this.setState ({
        todos: res.todos
      })
    })
  }
  render(){
    TodoModel.all().then( (respond) => {
    	console.log(respond);
    })
    return (
      <div className='todosContainer'>
        <CreateTodoForm />
        <TodoList
          todos={this.state.todos} />
      </div>
    )
  }
}

export default TodosContainer