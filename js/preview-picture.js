import {picturesContainer,photos} from './create-picture.js';

const picturesList = picturesContainer.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentLoaderButton = bigPicture.querySelector('.comments-loader');
const socialCommentLoaderCount = bigPicture.querySelector('.social__comments-loader-count');

const VISIBLE_COMMENT_COUNT = 5;

for(let i = 0; i < picturesList.length; i++){
  const picture = picturesList[i];
  const photoComments = photos[i].comments;
  const createComments = function() {
    const test = socialComments.querySelectorAll('.social__comment');
    for (const tes of test) {
      tes.remove();
    }
    let photoCommentIndex = 0;
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
      photoCommentIndex = photoCommentIndex + 1;
      if (photoCommentIndex > VISIBLE_COMMENT_COUNT) {
        userComment.classList.add('hidden');
      }
    }};
  picture.addEventListener('click', (evt)=> {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    bigPictureImg.src = `photos/${  i+1  }.jpg`;
    bigPictureCommentsCount.textContent = picture.querySelector('.picture__comments').textContent;
    bigPictureLikes.textContent = picture.querySelector('.picture__likes').textContent;
    bigPictureDescription.textContent = photos[i].description;
    document.querySelector('body').classList.add('modal-open');
    createComments();
    socialCommentLoaderButton.addEventListener('click', showMoreComments);
  });
}

function showMoreComments () {
  socialComments.querySelectorAll('.hidden').forEach((element,index) => {
    if (index < 5) {
      element.classList.remove('hidden');
    }
  });

  const countComments = socialComments.children.length - socialComments.querySelectorAll('.hidden').length;
  socialCommentLoaderCount.textContent = countComments;
  if (socialComments.querySelectorAll('.hidden').length===0) {
    socialCommentLoaderButton.classList.add('hidden');
  }
}

const cancelButton = document.querySelector('.big-picture__cancel');
cancelButton.addEventListener('click', ()=>{
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  socialCommentLoaderButton.removeEventListener('click', showMoreComments);
  socialCommentLoaderButton.classList.remove('hidden');
  socialCommentLoaderCount.textContent = socialComments.children.length;
});
document.addEventListener('keydown', (evt)=>{
  if (evt.key === 'Escape'){
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    socialCommentLoaderButton.removeEventListener('click', showMoreComments);
    socialCommentLoaderButton.classList.remove('hidden');
  }
});
