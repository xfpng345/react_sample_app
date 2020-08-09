import React, {Component} from 'react'

class CreateComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      post: ''
    }
  }

  handleinputChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  createPostRequest = (event) => {
    console.log('this.state', this.state);
    fetch('http://localhost:3000/users', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: { 
        'Content-Type': 'application/json'
      },
    })
    .then( this.fetchTasks )
  }

  render() {
    const {name,post} = this.state;
    return (
      <div>
        <p>Hi this is the create form</p><br />
        <p>name</p>
        <input 
        type='text'
        name='name'
        value={name}
        onChange={this.handleinputChange
        }/>
        <p>post</p>
        <input 
        type=''
        name='post' 
        value={post}
        onChange={this.handleinputChange}
        />
        <button onClick={this.createPostRequest}>post</button>
      </div>
    );
  };
};


export default CreateComponent;