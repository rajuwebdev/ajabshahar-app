import axios from 'axios'; // ✅ plain Axios, no baseURL
import { handleApiError } from '../utils/handleApiError';

export async function getPublishedSongs() {
  try {
    const response = await axios.get('/api/songs');
    return response.data;
  } catch (error) {
    const message = handleApiError(error);
    // console.error('[getPublishedSongs] API Error:', message);
    throw new Error(message);
  }
}

// export async function fetchUserById(userId: string) {
//   const response = await axios.get(`/users/${userId}`);
//   return response.data;
// }

// export async function createUser(data: { name: string; email: string }) {
//   const response = await axios.post("/users", data);
//   return response.data;
// }
