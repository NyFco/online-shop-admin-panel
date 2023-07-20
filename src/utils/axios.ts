import axios from 'axios';
const baseURL = 'https://nextjs-online-shop-396f2-default-rtdb.firebaseio.com';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const temp = config;
    // const accessToken = localStorage.getItem('access_token');
    // if (temp && temp.headers && accessToken) {
    //   temp.headers.Authorization = `Bearer ${accessToken}`;
    // }
    return temp;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (err) => {
    return Promise.reject(err.response.data);
  }
);

export default instance;
