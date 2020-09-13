import React from 'react';

function App() {
  const pStyle = {
    color: "green",
    textDecoration: "underline"
  }
  return (
    <div>
      <h2 style={{ fontSize: "50px", color: "red" }}>title</h2>
      <p style={pStyle}>this is article</p>
    </div>
  );
}

export default App;
