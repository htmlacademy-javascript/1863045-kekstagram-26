import {getPhotosArray} from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const photosArray = getPhotosArray();

const simularPhotos = document.createDocumentFragment();

photosArray.forEach((photo) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  simularPhotos.append(photoElement);
});

picturesContainer.append(simularPhotos);
