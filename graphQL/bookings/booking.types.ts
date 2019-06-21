export default [
  `
  type Booking {
    id: String!,
    status: String,
    clientName: String
  }

  type Query {
    bookings: [Booking]!
  }

  type Mutation {
    addBooking(status: String, clientName: String): Booking
  }
  `
];
