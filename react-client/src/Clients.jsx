import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const Clients = () => (
  <div>
    <span>Clients</span>
    <Query
      query={gql`
        {
          bookings {
            clientName
            status
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.bookings.map(({ clientName, status }) => (
          <ul key={clientName}>
            <li>{clientName}</li>
            <li>{status}</li>
          </ul>
        ));
      }}
    </Query>
  </div>
);

export default Clients;
