// services/api/api.js
import axios from 'axios';
console.log(import.meta.env, "fffffffffff")
// Create a basic Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_BASEURL, // Free fake API for testing
  withCredentials: true, // Enable cookies for cross-site requests
});

// Static token
const STATIC_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE2MywiZW1haWwiOiJ2aXJhdEtob2xpQHlvcG1haWwuY29tIiwicm9sZSI6ImxlYXJuZXIiLCJpc0FjdGl2ZSI6dHJ1ZSwicm9sZUJ5QWNjZXNzIjpudWxsLCJmaXJzdF9uYW1lIjoiVmlyYXQiLCJsYXN0X25hbWUiOiJLaG9saSIsIm9yZ19pZCI6MjgsImlhdCI6MTc3MzA0ODQ3N30.uRaErcSVb1P-kvbDbPl60WqNkNuxSApqbloCiLZFGzg";
// Simple request interceptor to add auth token if exists
// Request interceptor
api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${STATIC_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);


export default api;

