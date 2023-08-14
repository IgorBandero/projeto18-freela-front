import axios from "axios";

function signin(body) {
    const promise = axios.post(`http://localhost:5000/signin`, body);
    return promise;
};

function signup(body) {
    const promise = axios.post(`http://localhost:5000/signup`, body);
    return promise;
}

const AuthApi = { signin, signup };
export default AuthApi;