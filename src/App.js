import React from "react";
import './App.css';

import Navbar from './Navbar'
import Users from './Users'

export default function App() {
  return (
    <div className="App-header">

      {/* add Navbar.js and Users.js to display */}
      <Navbar />
      <Users />
      
    </div>
  );
}