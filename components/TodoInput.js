import React from 'react';
import { gql, graphql } from 'react-apollo';

import { todosListQuery } from '../containers/Index';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' }
  }
  onInputChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }
  onEnter = (e) => {
    if(e.keyCode === 13) {
      this.props.mutate({
        variables: { text: this.state.todo },
        refetchQueries: [{ query: todosListQuery }],
      })
      this.setState({
        todo: '',
      })
    }
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.todo}
        placeholder="add Todo"
        onChange={this.onInputChange}
        onKeyUp={this.onEnter}
      />
    )
  }
}

const addTodoMutation = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      complete
    }
  }
`

export default graphql(
  addTodoMutation,
)(TodoInput);
