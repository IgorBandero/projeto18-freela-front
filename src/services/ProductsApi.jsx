import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function getProducts() {
    const promise = axios.get(`${API_URL}/products`);
    return promise;
};

function getProduct(id) {
    const promise = axios.get(`${API_URL}/product/${id}`);
    return promise;
};

const ProductsApi = { getProducts, getProduct };
export default ProductsApi;