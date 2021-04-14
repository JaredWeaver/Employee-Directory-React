import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/?results=20&nat=us';

export default {
  employees: function (query) {
    return axios.get(BASEURL + query);
  }
};
