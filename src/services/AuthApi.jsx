import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function signin(body) {
    const promise = axios.post(`${API_URL}/signin`, body);
    return promise;
};

const AuthApi = { signin };
export default AuthApi;