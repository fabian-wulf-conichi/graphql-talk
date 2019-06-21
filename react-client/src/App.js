import React, { Component } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Header from "./Header";
import Clients from "./Clients";
import Bookings from "./Bookings";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  state = { display: "booking" };
  setDisplay = ({ display }) => {
    this.setState({ display });
  };
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header setDisplay={this.setDisplay} />
          <div>
            {this.state.display === "booking" ? <Bookings /> : <Clients />}
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
