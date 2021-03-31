import axios from 'axios';

export const DEFAULT_LANG = 'en';
export const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://35.180.110.104:9090' : 'https://35.180.110.104:9090';
export const API = axios.create({
    baseURL: BASE_URL
});

// APIs

export const GET_CHAMPIONS = '/stack/champion/';    //GET  /stack/champion/{locale}   : locale-> ar-ae/en-us  list   
                                                    //GET  /stack/champion/{locale}/{page}/{limit}     listWithPagination 
                                                    //GET  /stack/champion/{locale}/id/{uid}    get
export const UPDATED_CHAMPION = '/stack/champion/updated';