import axios from 'axios';

export const GithubAPI = axios.create({
    baseURL: 'https://api.github.com/'
});
// headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}` }
