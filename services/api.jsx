import axios from "axios";

const nexusAPI = axios.create({
    baseURL: `http://10.109.71.43:8000/`,
});

export default nexusAPI;