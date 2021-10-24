import API from '../config/api';
const moduleAPI = 'price-evolution-chart'

const PriceEvolutionServices = {
    get: async () => {
        const response = await API.get(moduleAPI);
        return response;
    }
}

export default PriceEvolutionServices;