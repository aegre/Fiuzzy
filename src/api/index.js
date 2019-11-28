import axios from 'axios';

const makeRequest = (options) => console.log(process.env) || axios({
  method: 'get',
  baseURL: process.env.REACT_APP_API_URL,
  ...options,
});

const API = {
  getList: () => {
    makeRequest({
      url: '/bins/rdlcq',
    });
  },
};

export default API;
