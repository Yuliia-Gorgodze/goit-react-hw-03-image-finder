import axios from 'axios';
import propTipes from 'prop-types';
const fetchImages = value => {
  return axios.get(
    `https://pixabay.com/api/?q=${value}&page=${1}&key=19710630-7a075c48acce7d09c67ce0055&image_type=photo&orientation=horizontal&per_page=12`,
  );
};
const loadMore = (value, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=19710630-7a075c48acce7d09c67ce0055&image_type=photo&orientation=horizontal&per_page=12`,
  );
};
const objectFetch = {
  fetchImages,
  loadMore,
};
export default objectFetch;

fetchImages.propTipes = {
  value: propTipes.string,
};
loadMore.propTipes = {
  value: propTipes.string,
  page: propTipes.number,
};
