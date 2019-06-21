import React from "react";

const Header = ({ setDisplay }) => (
  <React.Fragment>
    <div className="App-header">
      <h2>Casa del Wulf</h2>
    </div>
    <div
      style={{
        padding: "2em",
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <button onClick={() => setDisplay({ display: "booking" })}>
        Show bookings
      </button>
      <button onClick={() => setDisplay({ display: "clients" })}>
        Show clients
      </button>
    </div>
  </React.Fragment>
);

export default Header;
