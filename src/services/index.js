import axios from 'axios';
import Currency from './currency';
const API_ENVS = {
    development: '',
    api: 'https://economia.awesomeapi.com.br/json',
};

const httpClient = axios.create({
    baseURL: API_ENVS.api,
});

export default {
    currency: Currency(httpClient),
};