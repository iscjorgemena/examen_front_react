import API from '../config/api';
const moduleAPI = 'presence-share-chart'

const PresenceShareServices = {
    get: async () => {
        const response = await API.get(moduleAPI);
        return response;
    }
}

export default PresenceShareServices;