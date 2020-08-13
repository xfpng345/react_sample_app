import React from 'react';

class DeleteComponent extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props.fetch)
  }

  deleteUser(userId){
    console.log(userId)
    fetch('http://localhost:3000/users/'+userId, {
      method: 'delete',
    })
    .then(() => this.props.fetch())
  }
render() {
  return (
    <button onClick={ ()=>{ this.deleteUser(this.props.UserId) } }>delete</button>
    )
  }
}

export default DeleteComponent;