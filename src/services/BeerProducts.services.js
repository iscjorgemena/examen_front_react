import API from '../config/api';
const moduleAPI = 'beer-products'

const BeerProductsServices = {
    get: async () => {
        const response = await API.get(moduleAPI);
        return response;
    }
}

export default BeerProductsServices;