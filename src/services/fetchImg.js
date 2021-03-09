import axios from 'axios';
import propTipes from 'prop-types';

const fetchImg = (value, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=19710630-7a075c48acce7d09c67ce0055&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export default fetchImg;

fetchImg.propTipes = {
  value: propTipes.string,
  page: propTipes.number,
};
