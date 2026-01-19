import axios from "axios";

const ACCESS_KEY = "mt2vY0Ld0VkTOi4Jn1dEXmM9FpkKrAKADo8aCByvPFM";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
