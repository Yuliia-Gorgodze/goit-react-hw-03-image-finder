import { Component } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';
import Loader from './components/Loader';
import fetch from './services/fetchImg';

class App extends Component {
  state = {
    images: [],
    value: '',
    modal: false,
    isLoading: false,
    linkModal: {},
    page: 0,
  };
  onSubmitForm = value => {
    if (value) {
      this.setState({ isLoading: true });

      fetch
        .fetchImages(value)
        .then(({ data }) => data.hits)
        .then(data =>
          this.setState({
            images: data,
            value: value,
            page: 2,
            isLoading: false,
          }),
        )
        .catch(error => console.error({ error }));
    } else {
      alert('введите значение');
    }
  };

  loadMore = () => {
    const { value, page, images } = this.state;
    this.setState({ isLoading: true });
    fetch
      .loadMore(value, page)
      .then(({ data }) => data.hits)
      .then(data =>
        this.setState({
          images: [...images, ...data],
          isLoading: false,
        }),
      );
    this.setState(state => {
      return { page: state.page + 1 };
    });
  };
  showModal = img => {
    const { modal } = this.state;
    img
      ? this.setState({ linkModal: img, modal: !modal })
      : this.setState({ modal: !modal });
  };
  closeModal = event => {
    const { modal } = this.state;
    if (event.target.nodeName === 'DIV') {
      this.setState({ modal: !modal });
    }
  };

  render() {
    return (
      <div>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        {this.state.images.length === 0 ? (
          <h1>Что ищем? </h1>
        ) : (
          <ImageGallery images={this.state.images} openModal={this.showModal} />
        )}
        {this.state.modal && (
          <Modal
            showModal={this.showModal}
            clouseModal={this.closeModal}
            img={this.state.linkModal}
          />
        )}
        {this.state.images.length !== 0 && <Button loadMore={this.loadMore} />}
        {this.state.isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
