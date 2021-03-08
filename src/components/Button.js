import propTipes from 'prop-types';

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});

const Button = ({ loadMore }) => {
  console.log(loadMore);
  return <button onClick={loadMore}>Load more</button>;
};
export default Button;

Button.propTipes = {
  loadMore: propTipes.func.isRequired,
};
