import axios from 'axios';

axios.defaults.withCredentials = true;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getResponse(keyword) {
    return axios.get(`http://0.0.0.0:50000/api/search/${keyword}`);
  },
};
