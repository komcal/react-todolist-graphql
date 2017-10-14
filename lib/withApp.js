import React from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const withAppLayout = () => Component => (
  class Layout extends React.Component {
    static async getInitialProps(ctx) {
      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...(await (Component.getInitialProps
          ? Component.getInitialProps(ctx)
          : {}))
      };
      return {
        ...props,
      };
    }
    constructor(props) {
      super(props);
      const graphqlEndpoint = 'http://localhost:8080/graphql';
      const networkInterface = createNetworkInterface({ uri: graphqlEndpoint });
      const option = {
        networkInterface,
      };
      this.client = new ApolloClient(option);
      console.log(`start with graphql endpoint : ${graphqlEndpoint}`);
    }
    render() {
      return (
        <div id="my-app">
          <div className="content">
            <ApolloProvider client={this.client}>
              <Component {...this.props} />
            </ApolloProvider>
          </div>
        </div>
      )
    }
  }
);

export default withAppLayout;
