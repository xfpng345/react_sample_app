import React, { Component } from "react"
class IndexComponent extends Component {
  constructor(props){
    super(props)
  }

  render () {
    const users = this.props.users;
    return (
      <div>
        <ul>
          {users.map((user) => {
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