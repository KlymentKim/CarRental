import axios from "axios";

axios.defaults.baseURL = "https://65216e3da4199548356d33a1.mockapi.io/api/1/";
export const quantityPage = 8;

const fetchMockapi = async (page = 1) => {
  try {
    const response = await axios.get(
      `adverts?quantityPage=${quantityPage}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchMockapi;
