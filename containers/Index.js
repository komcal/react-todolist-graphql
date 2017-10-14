import React from 'react';
import { gql, graphql } from 'react-apollo';

const TodosList = ({ data: { loading, error, todos }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="todoslist">
      <ul>
        {
          todos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))
        }
      </ul>
    </div>
  );
}

export const todosListQuery = gql`
  query TodosListQuery {
    todos {
      id
      text
    }
  }
`;

export default graphql(todosListQuery, {
  options: { pollInterval: 5000 },
})(TodosList);
