import axios from 'axios';
// export const { API_BASE_URL, IMAGE_BASE_URL } = "../environment";
export const API_BASE_URL = "http://35.153.234.62:8001/api/";
export  const IMAGE_BASE_URL = 'http://35.153.234.62:8001/images/';

export const httpClient = axios.create({
  baseUrl: API_BASE_URL,
})