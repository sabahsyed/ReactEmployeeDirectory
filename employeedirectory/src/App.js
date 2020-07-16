import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import getUsers from "./utils/API";
import logo from './logo.svg';
import HomePage from "./components/pages/HomePage";
import './App.css';

function App() {
  return <HomePage />;
}

export default App;
