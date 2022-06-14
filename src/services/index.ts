import axios from "axios";

const env = process.env.NODE_ENV === "development";

const axiosGet = <T>(requestData: AxiosHandler["config"]) => {
  return axios.get<T>(
    `${
      env
        ? "http://localhost:4000"
        : "https://zombie-apocalypse-backend.herokuapp.com"
    }${requestData.path}/${requestData.params ? requestData.params : ""}`
  );
};

const axiosPut = <T>(requestData: AxiosHandler) => {
  return axios.put<T>(
    `${
      env
        ? "http://localhost:4000"
        : "https://zombie-apocalypse-backend.herokuapp.com"
    }${requestData.config.path}/${
      requestData.config.params ? requestData.config.params : ""
    }`,
    {
      ...requestData.body,
    }
  );
};

export { axiosGet, axiosPut };

