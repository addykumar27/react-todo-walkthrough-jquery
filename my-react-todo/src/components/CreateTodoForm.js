import React, {Component} from 'react'

class CreateTodoForm extends Component {
 constructor() {
    super()
    this.state = {
      todo: ''
    }
}
  onInputChange(event){
    console.log('create todo input changed')
  }
  onFormSubmit(event){
    console.log('form submitted')
    event.preventDefault()
    let newTodo = this.state.todo
    this.props.createTodo(newTodo)
    this.setState({
      todo: ''
    })
}     

  render(){
    return (
      <div className='createForm todoForm'>
        <h2>Create Todo Here!</h2>
        <form>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Write a todo here ...'
            type='text'
            value={this.state.todo} />            
        </form>
          <div>
          <form onSubmit={event => this.onFormSubmit(event)}>
          </div>
      </div>
    )
  }
}

export default CreateTodoForm