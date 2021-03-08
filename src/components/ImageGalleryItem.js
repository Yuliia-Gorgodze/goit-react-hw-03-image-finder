import propTipes from 'prop-types';

const ImagesGalleryItem = ({ img, openModal }) => {
  const { webformatURL, tags } = img;
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => openModal(img)}
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};
export default ImagesGalleryItem;

ImagesGalleryItem.propTipes = {
  img: propTipes.node,
  openModal: propTipes.func.isRequired,
};
