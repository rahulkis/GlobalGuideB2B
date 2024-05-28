import axios from 'axios';
// export const { API_BASE_URL, IMAGE_BASE_URL } = "../environment";
export const API_BASE_URL = "http://3.93.66.218:8000/api/";
export  const IMAGE_BASE_URL = 'http://3.93.66.218:8000/images/';

export const httpClient = axios.create({
  baseUrl: API_BASE_URL,
})