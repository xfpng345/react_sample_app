import React, { Component } from "react"
class IndexComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    }
  }

  componentDidMount() {
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

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} {user.post}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default IndexComponent;