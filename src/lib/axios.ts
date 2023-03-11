import axios from 'axios';

export const GithubAPI = axios.create({
    baseURL: 'https://api.github.com/'
});
