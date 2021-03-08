import ImagesGalleryItem from '../components/ImageGalleryItem';
import propTipes from 'prop-types';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(img => (
        <ImagesGalleryItem openModal={openModal} img={img} key={img.id} />
      ))}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTipes = {
  images: propTipes.array.isRequired,
  openModal: propTipes.func.isRequired,
};
