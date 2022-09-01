import axios from "axios";

const omdbService = axios.create({
  baseURL: "http://www.omdbapi.com/",
  timeout: 5000,
});

export default omdbService;
