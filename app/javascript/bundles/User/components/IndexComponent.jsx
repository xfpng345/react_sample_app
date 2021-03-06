import React from "react"
import DeleteComponent from './DeleteComponent';
class IndexComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      name: '',
      post: ''
    }
  }

  handleinputChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  createPostRequest = () => {
    fetch('http://localhost:3000/users', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(() => this.fetchIndex())
  }

  putUser(userId){
    fetch('http://localhost:3000/users/'+userId, {
      method: 'put',
      body: JSON.stringify({name:'更新'}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(() => this.fetchIndex())
  }

  componentDidMount() {
    this.fetchIndex()
  }

  fetchIndex= () => {
    fetch("http://localhost:3000/users") // データを取得しに行く
    .then( res => res.json() ) // json型のレスポンスをオブジェクトに変換する
    .then( res => { // オブジェクトに変換したレスポンスを受け取り、
      this.setState({ users: res }) // Stateを更新する
    })
  }

  render() {
    const { users, name, post } = this.state;
      return (
        <div>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.id} {user.name} {user.post}
                <button onClick={ ()=>{ this.putUser(user.id) } }>put</button>
                <DeleteComponent UserId={user.id}  fetch={() => this.fetchIndex()}/>
              </li>
            ))}
          </ul>
          <p>name</p>
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.handleinputChange}
          />
          <p>post</p>
          <input
            type='text'
            name='post'
            value={post}
            onChange={this.handleinputChange}
          />
          <button id="submit" onClick={this.createPostRequest}>submit</button>
        </div>
      );
  }
}

export default IndexComponent;