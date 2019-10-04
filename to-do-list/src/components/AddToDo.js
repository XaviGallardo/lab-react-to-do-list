import React, { Component } from 'react';

export default class AddToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
      done: false,
    };
  }

  handleToDoInput = event => {
    this.setState({
      todo: event.target.value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addToDo(this.state);
    this.setState({
      todo: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>What To-Do:</label>
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={e => this.handleToDoInput(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// export default AddToDo;
