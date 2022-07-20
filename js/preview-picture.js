import {picturesContainer,photos} from './create-picture.js';

const picturesList = picturesContainer.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const socialCommentLoader = bigPicture.querySelector('.comments-loader');

for(let i = 0; i < picturesList.length; i++){
  const picture = picturesList[i];
  const photoComments = photos[i].comments;
  const createComments = function() {
    const test = socialComments.querySelectorAll('.social__comment');
    for (const tes of test) {
      tes.remove();
    }
    for (const photoComment of photoComments){
      const userComment = document.createElement('li');
      userComment.classList.add('social__comment');
      socialComments.append(userComment);
      const userCommentAvatar = document.createElement('img');
      userCommentAvatar.classList.add('social__picture');
      userCommentAvatar.src = photoComment.avatar;
      userCommentAvatar.alt = photoComment.name;
      userComment.append(userCommentAvatar);
      const userCommentText = document.createElement('p');
      userCommentText.classList.add('social__text');
      userCommentText.textContent = photoComment.message;
      userComment.append(userCommentText);
    }};
  picture.addEventListener('click', (evt)=> {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    bigPictureImg.src = `photos/${  i+1  }.jpg`;
    bigPictureCommentsCount.textContent = picture.querySelector('.picture__comments').textContent;
    bigPictureLikes.textContent = picture.querySelector('.picture__likes').textContent;
    bigPictureDescription.textContent = photos[i].description;
    socialCommentsCount.classList.add('hidden');
    socialCommentLoader.classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
    createComments();
  });
}

// Кнопка закрытия
const cancelButton = document.querySelector('.big-picture__cancel');
cancelButton.addEventListener('click', ()=>{
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});
document.addEventListener('keydown', (evt)=>{
  if (evt.key === 'Escape'){
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});
