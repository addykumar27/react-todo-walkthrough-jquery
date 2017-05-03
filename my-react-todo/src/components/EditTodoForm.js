import React, {Component} from 'react'

class EditTodoForm extends Component {
constructor(){
    super()
    this.state = {
      updateTodo: ''
    }
  }
  onInputChange(event) {
      console.log('changing a todo!')
      this.setState({
      updateTodo: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    console.log('edit todo form submitted')
    this.props.onUpdateTodo(this.state.updateTodo, this.props.todo._id)
    this.setState({
    updateTodo: ''
  })
}
  
  render(){
    return (
      <div className='editTodoForm' data-todo-id={this.props.todo._id}>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Write updated todo here...'
            type='text'
            value={this.state.updatedTodo} />
          <button type='submit'>Update Todo!</button>
        </form>
      </div>
    )
  }
}

export default EditTodoForm
