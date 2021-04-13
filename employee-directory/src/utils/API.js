import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=200&nat=us&inc=name,location,picture";
// const APIKEY = "";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
