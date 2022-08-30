import axios from "axios";

const omdbClient = axios.create({
  baseURL: "http://www.omdbapi.com/",
  timeout: 5000,
});

export default omdbClient;
