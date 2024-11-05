import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchData } from './js/pixabay-api';
import { createMarkup, setupImageLoadHandlers } from './js/render-functions';

const form = document.querySelector('.form');
const container = document.querySelector('.gallery');
let lightbox = null;

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const { textName } = event.target.elements;

  if (textName.value.trim() === '') {
    iziToast.warning({
      title: 'Hey',
      message: 'You forgot important data',
      color: 'red',
    });
    return;
  }

  fetchData(textName.value)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          title: 'Hey',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'orange',
        });
      } else {
        container.innerHTML = createMarkup(data.hits);
        setupImageLoadHandlers(container);

        if (lightbox) {
          lightbox.refresh();
        } else {
          lightbox = new SimpleLightbox('.gallery .images-gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
          });
        }
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Fetch error: ${error.message}`,
        color: 'red',
      });
    });

  form.reset();
}
