import React, { Component } from "react"
class IndexComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    this.fetchTasks()
  }

  fetchTasks(){
    fetch("http://localhost:3000/users")
    const users = this.props.users;
    this.setState({users: users})
  }

  render () {
    return (
      <div>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user.id}>
                <span>{user.name}:::::</span>
                <span>{user.post}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default IndexComponent;