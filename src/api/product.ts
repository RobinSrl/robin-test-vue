import axios from 'axios';

async function getAllProducts() {
    return axios.get('https://dummyjson.com/products')
        .then(response => {
            return response.data.products;
        })
        .catch(error => {
            console.error(error);
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(error.response.data.message || 'Errore sconosciuto');
            }
            throw new Error(error.message || 'Errore sconosciuto');
        });
}

async function getProductById(id: string) {
    return axios.get(`https://dummyjson.com/products/${id}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(error.response.data.message || 'Errore sconosciuto');
            }
            throw new Error(error.message || 'Errore sconosciuto');
        });
}

export { getAllProducts, getProductById };
