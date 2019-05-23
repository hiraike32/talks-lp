import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import "./styles/base.scss";

const client = new ApolloClient({
  uri: "https://tml-api.herokuapp.com/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Root />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("app"),
);
