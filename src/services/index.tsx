import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://tasks-list-production.up.railway.app/tasks',
    timeout: 10000
});
