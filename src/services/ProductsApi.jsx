import axios from "axios";
import AuthApi from "../services/AuthApi";

const API_URL = import.meta.env.VITE_API_URL;

function getProducts() {
    const promise = axios.get(`${API_URL}/products`);
    return promise;
};

function getProduct(id) {
    const promise = axios.get(`${API_URL}/product/${id}`);
    return promise;
};

function newProduct(body, token){

    const auth = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
    };

    const promise = axios.post(`${API_URL}/products/`, body, auth);
    return promise;
}

function getUserProducts(token){

    const auth = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
    };

    const promise = axios.get(`${API_URL}/myproducts/`, auth);
    return promise;
}

function deleteProduct(id, token){

    const auth = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
    };

    const promise = axios.delete(`${API_URL}/products/${id}`, auth);
    return promise;
}

const ProductsApi = { getProducts, getProduct, newProduct, getUserProducts, deleteProduct};
export default ProductsApi;