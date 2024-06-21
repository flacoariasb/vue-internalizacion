import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.0.47:3000/", //matriz

});

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['apikey'] = 'documental';
    config.headers['apisecret'] = 'Documental2021file';
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });