import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const getAnswer = async (userQuestion) => {
  try {
    const resp = await api.get(`/search`, {
      params: { q: userQuestion },
    });
    return resp;
  } catch (error) {
    return error;
  }
};

export { getAnswer };
