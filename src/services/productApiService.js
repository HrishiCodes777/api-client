import axios from "axios";

const URL = `http://localhost:5218/api/Product/all`;

// Function to retrieve all the products
async function getProducts() {
    try {
        const response = await axios.get(URL);
        if (response.status === 200 && response.data) {
            return response.data;
        } else {
            throw new Error('Unexpected response');
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

async function getProduct(id) {
    const url = `http://localhost:5218/api/Product/${id}`;
    try {
        const response = await axios.get(url);
        if (response.status === 200 && response.data) {
            console.log('Product data:', response.data);
            return response.data;
        } else {
            throw new Error('Unexpected response');
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}

export { getProducts, getProduct };
