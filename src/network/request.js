import axios from "axios";
// axios 使用文档 https://github.com/axios/axios
// import store from "@/store/index"


export function request(config) {
  const instance = new axios.create({
    baseURL: "http://10.10.3.2:8000",
    timeout: 60000
  });

  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      // TODO 设置请求头
      // config.headers["API-HTTP-AUTHORIZATION"] = sessionStorage.getItem('API-HTTP-AUTHORIZATION');
      return config;
    },
    err => {
      console.log(err);
    }
  );

  // 响应拦截器
  instance.interceptors.response.use(
    res => {
      // console.log("拦截后需要将拦截下来处理成的结果返回res", res);
      // 拦截后需要将拦截下来处理成的结果返回
      return res;
    },
    err => {
      // console.log("拦截后需要将拦截下来处理成的结果返回", err);
      console.log(err);
    }
  );

  return instance(config);
}

export function fileRequest(config){
  const axiosInstance = new axios.create({
    baseURL: "http://10.10.3.2:8000",
    timeout: 30000,
    headers: {'Content-Type': 'multipart/form-data'}
  });

    // 请求拦截器
    axiosInstance.interceptors.request.use(
      config => {
        // TODO 设置请求头
        // config.headers["API-HTTP-AUTHORIZATION"] = sessionStorage.getItem('API-HTTP-AUTHORIZATION');
        return config;
      },
      err => {
        console.log(err);
      }
    );
  
    // 响应拦截器
    axiosInstance.interceptors.response.use(
      res => {
        // console.log("拦截后需要将拦截下来处理成的结果返回res", res);
        // 拦截后需要将拦截下来处理成的结果返回
        return res.data;
      },
      err => {
        // console.log("拦截后需要将拦截下来处理成的结果返回", err);
        console.log(err);
      }
    );
  
    return axiosInstance(config);
}

export function certRequest(config){
  const axiosCertReqInstance = new axios.create({
    baseURL: "http://10.10.3.2:8000",
    timeout: 600000,
  });

    // 请求拦截器
    axiosCertReqInstance.interceptors.request.use(
      config => {
        // TODO 设置请求头
        config.headers["API-HTTP-AUTHORIZATION"] = sessionStorage.getItem('API-HTTP-AUTHORIZATION');
        return config;
      },
      err => {
        console.log(err);
      }
    );
  
    // 响应拦截器
    axiosCertReqInstance.interceptors.response.use(
      res => {
        // console.log("拦截后需要将拦截下来处理成的结果返回res", res);
        // 拦截后需要将拦截下来处理成的结果返回
        return res;
      },
      err => {
        // console.log("拦截后需要将拦截下来处理成的结果返回", err);
        console.log(err);
      }
    );
    return axiosCertReqInstance(config);
}

export function certRevokeRequest(config){
  const axiosCertRevokeReqInstance = new axios.create({
    baseURL: "http://10.10.3.2:8000",
    timeout: 600000,
    headers: {'Content-Type': 'application/json'}
  });

    // 请求拦截器
    axiosCertRevokeReqInstance.interceptors.request.use(
      config => {
        // TODO 设置请求头
        config.headers["API-HTTP-AUTHORIZATION"] = sessionStorage.getItem('API-HTTP-AUTHORIZATION');
        return config;
      },
      err => {
        console.log(err);
      }
    );
  
    // 响应拦截器
    axiosCertRevokeReqInstance.interceptors.response.use(
      res => {
        // console.log("拦截后需要将拦截下来处理成的结果返回res", res);
        // 拦截后需要将拦截下来处理成的结果返回
        return res;
      },
      err => {
        // console.log("拦截后需要将拦截下来处理成的结果返回", err);
        console.log(err);
      }
    );
    return axiosCertRevokeReqInstance(config);
}
