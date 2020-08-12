import React, {Component} from 'react'

class CreateComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      post: ''
    }
    this.fetchTask=this.fetchTask.bind(this)
  }

  handleinputChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  fetchTask() {
    fetch("http://localhost:3000/users/")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          users: result
        });
      },
      // 補足：コンポーネント内のバグによる例外を隠蔽しないためにも
      // catch()ブロックの代わりにここでエラーハンドリングすることが重要です
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
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
    .then(this.fetchTask)
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