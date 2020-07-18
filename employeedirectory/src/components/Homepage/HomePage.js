import React, { Component } from "react";
//import API from "../../utils/API";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Table from "../Table/Table";
import axios from "axios";


class HomePage extends Component {
  state = {
    results: [],

  };
// Its working when we call the API directly in componentDidMount
componentDidMount() {
  axios.get("https://randomuser.me/api/?results=200&nat=us")
  .then((res) => this.setState({results : res.data.results}))
      //.then((res)=> console.log(res))
  }
componentDidUpdate(){
  console.log("This is ComponentDidUpdate")
  console.log(this.state.results);
}

handleInputChange = event => {
  const name = event.target.name;
  const value = event.target.value;
    this.setState({
      [name] : value
    })
}

// handleSubmitBtn = event => {
//   event.preventDefault();
//   this.state.search = this.componentDidMount();
// };
sort = () => {
  const sortResults = this.state.results.sort();
  console.log("Sorted Results ==>",sortResults)
}
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        search = {this.state.search}
        handleInputChange  = {this.handleInputChange}
        handleSubmitBtn = {this.handleSubmitBtn}
        <Table
          results = {this.state.results}
          sort  = {this.sort}
        />
      </div>
    );
  }
}

export default HomePage;
