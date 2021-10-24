import axios from 'axios';
import { config } from './config'

export default axios.create({
    baseURL: config.urlAPI,
    headers: { "Access-Control-Allow-Origin": true }
});