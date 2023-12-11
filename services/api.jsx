import axios from "axios";

const nexusAPI = axios.create({
    baseURL: `http://192.168.0.101:8080/`,
});

export default nexusAPI;