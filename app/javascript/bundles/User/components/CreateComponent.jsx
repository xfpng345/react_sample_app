import React, {Component} from 'react'

class CreateComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }

  onChangetxet(e) {
    this.setState({product: e.target.value})
  }
  render() {
    return (
      <div>
        <p>Hi this is the create form</p><br />
        <form>
          <p>name</p>
          <input />
          <p>post</p>
          <textarea/>
          <input type='submit' value='作成'/>
        </form>
      </div>
    );
  };
};


export default CreateComponent;