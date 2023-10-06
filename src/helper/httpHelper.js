// timer = 6:00 vlc

// Server request OR API call


import axios from 'axios'



export const httpAxios = axios.create({
    baseURL: process.env.BASE_URL,
})