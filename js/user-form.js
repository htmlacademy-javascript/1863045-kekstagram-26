const fileChooser = document.querySelector('.img-upload__input');
const uploadModal = document.querySelector('.img-upload__overlay');
const buttonCanceluploadModal = document.querySelector('.img-upload__cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const imgPreview = document.querySelector('.img-upload__preview img');
const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm);

fileChooser.addEventListener('change', ()=>{
  uploadModal.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  const file = fileChooser.files[0];
  imgPreview.src = URL.createObjectURL(file);
});

uploadForm.addEventListener('submit', (evt)=>{
  const isValid = pristine.validate();
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const hashtags = hashtagInput.value.split(' ').sort();
  if (hashtags[0]){
    for(let i = 0;i < hashtags.length; i++){
      if (!re.test(hashtags[i])) {
        evt.preventDefault();
      }
      if(hashtags[i + 1] === hashtags[i]){
        evt.preventDefault();
      }
    }
  }
  if (hashtags.length > 5) {
    evt.preventDefault();
  }
  if (!isValid) {
    evt.preventDefault();
  }
});

buttonCanceluploadModal.addEventListener('click', ()=> {
  uploadModal.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  fileChooser.value = '';
});

document.addEventListener('keydown', (evt)=>{
  if(evt.key === 'Escape') {
    uploadModal.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    fileChooser.value = '';
  }
});
