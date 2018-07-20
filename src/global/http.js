import Axios from "axios";
import qs from 'qs'

export default Axios;


//请求超时
Axios.defaults.timeout = 1000 * 15;

//请求base地址
Axios.defaults.baseURL = "http://192.168.3.248/PHP_TEST_20180702/public/";



//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (config.method === "post" || config.method === "put" || config.method === "delete") {


      /**
       * Java服务器
       */
      // config.data = JSON.stringify(config.data)
      // config.headers = {
      //   "Content-Type": "application/json;charset=utf-8"
      // };


      /**
       * PHP服务器
       */
      config.data = qs.stringify(config.data, {
        indices: false
      })
      config.headers = {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      };


    }

    // 若是有做鉴权token , 就给头部带上token
    // if (localStorage.token) {
    //   config.headers.Authorization = localStorage.token;
    // }
    return config;
  },
  error => {
    Message({
      //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: error,
      type: "error.data.error.message"
    });
    return Promise.reject(error.data.error.message);
  }
);



//请求方法  GET
export function $get(url, params = {}) {
  return new Promise((resolve, reject) => {
    Axios.get(url, {
        params: params
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function $post(url, params = {}) {
  return new Promise((resolve, reject) => {
    Axios.post(url, params)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      })
  });
}

export function $put(url, params) {
  return new Promise((resolve, reject) => {
    Axios.put(url, params)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function $delete(url, params) {
  return new Promise((resolve, reject) => {
    Axios.delete(url, params)
      .then(function (response) {
        resolve(response.params);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
