// Node modules
import axios from "axios";
import { toast } from "react-toastify";

// local files
import { SEARCH_BASE_URL } from "../config";

let Http = axios.create({ baseURL: SEARCH_BASE_URL });

//handle error globally
Http.interceptors.response.use(null, (error) => {
  const clientError =
    error.response?.status >= 400 && error.response?.status < 500;
  const serverError =
    error.response?.status >= 500 && error.response?.status < 600;

  if (clientError || serverError) {
    toast.error("Server or Client error", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    toast.warn("Check your internet connexion", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return Promise.reject(error);
});

export default Http;
