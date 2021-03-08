import Loader from 'react-loader-spinner';

const loader = () => {
  return (
    <Loader
      className="loader"
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
    />
  );
};
export default loader;
