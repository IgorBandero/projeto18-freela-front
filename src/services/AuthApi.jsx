import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function signin(body) {
    const promise = axios.post(`${API_URL}/signin`, body);
    return promise;
};

function signup(body) {
    const promise = axios.post(`${API_URL}/signup`, body);
    return promise;
}

const AuthApi = { signin, signup };
export default AuthApi;