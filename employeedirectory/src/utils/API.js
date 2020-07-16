// const axios = require("axios");

// // Export an object with a "search" method that searches the Giphy API for the passed query

//   async function searchFunc() {
//     try {
//       const response = await axios.get("https://randomuser.me/api/?results=200&nat=u");
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   module.exports = searchFunc;


import axios from "axios"
export default {
  // Gets all users
  getUsers: function() {
   // console.log(axios.get("https://randomuser.me/api/?results=200&nat=us"))
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};