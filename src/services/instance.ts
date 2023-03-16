import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://api.wisey.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYjFhODEwYy1iZGNjLTRiY2ItYTQyMC0xOTQ3MjRkZGMxNmMiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5MDYxMDMsImV4cCI6MTY3OTgwNjEwM30.en1Z4lf-sUfsh3eW9rGE-cexL7-IBiI73TrlFJzJ09U',
  },
});

export default axiosInstance;
