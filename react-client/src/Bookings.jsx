import React, { Component } from "react";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class Bookings extends Component {
  state = { bookings: [] };
  componentDidMount() {
    client
      .query({
        query: gql`
          {
            bookings {
              id
              status
              clientName
            }
          }
        `
      })
      .then(result => this.setState({ bookings: result.data.bookings }));
  }
  render() {
    return (
      <React.Fragment>
        <span>Bookings</span>
        <ul>
          {this.state.bookings.map((booking, i) => (
            <li key={i}>{`${booking.clientName} - ${booking.status}`}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Bookings;
