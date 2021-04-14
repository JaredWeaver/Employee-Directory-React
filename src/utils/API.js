import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20&nat=us";
// const APIKEY = "";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  employees: function(query) {
    return axios.get(BASEURL + query);
  }
};
