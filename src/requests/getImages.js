import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  }
  return axios
    .get(`https://images-api.nasa.gov/search?q=${query}`)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
};

export default getImages;