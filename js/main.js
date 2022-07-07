// функция возврата случайного числа от 0 до переданного диапазона включительно.
// Параметры функции:
// только положительные числа
// только целые числа
// не правильно переданные аргументы от и до

function getRandomInt (a, b) {
  const minValue = Math.round(Math.min(Math.abs(a), Math.abs(b)));
  const maxValue = Math.round(Math.max(Math.abs(a), Math.abs(b)));

  const resalt = Math.random() * (maxValue - minValue) + minValue;

  return Math.floor(resalt);
}

getRandomInt();

function checkMaxStringLength(string, length, maxLength){
  if(length <= maxLength) {
    return string;
  }
}

checkMaxStringLength();

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Олег',
  'Вася',
  'Коля',
  'Саша',
  'Даша',
  'Марина',
  'Ольга',
];

const DESCRIPTION = [
  'Гуляем с моим любимым котом',
  'Сегодня мой кот покусал кактус',
  'Наша поездка с котом к ветеринару',
  'Выбираю корм для кота',
  'Знакомство кота и соседской собаки',
  'Создали аккаунт в инстаграмме для кота',
  'Кот не так уж и любит купаться',
  'Купили зимний комбинизон для кота',
  'Кот не оценил новую лежанку',
  'Но зато кот оценил новую когтеточку',
  'Новая переноска для кота',
  'Кот радуется нашим летним каникулам у бабушки ',
  'Кот не так уж и обрадовался тому что ему предстоит лететь в отсеке для животных',
  'Собираем всё необходимое для путишествия',
  'Пытаемся не опоздать на наш рейс',
  'Сели в самолёт',
  'Оригинальная фотография из иллюминатора',
  'Только приземлились',
  'Жду своего богажа',
  'Ждём с котом такси до бабушки',
  'Бабушка совсем не узнала кота',
  'Кушаем с котом пирожки',
  'Разгадываем бабушки кроссворд',
  'Снова кушаем пирожки',
  'Собираемся на речку',
];

function generatingСomment(){
  const randomId = getRandomInt(1, 99999);
  const randomAvatar = `img/avatar-${  getRandomInt(1, 6)  }.svg`;
  const randomMessage = MESSAGES[getRandomInt(0, MESSAGES.length - 1)];
  const randomName = NAMES[getRandomInt(0, NAMES.length - 1)];
  return {
    id: randomId,
    avatar: randomAvatar,
    message: randomMessage,
    name: randomName,
  };
}

function getComments(){
  const randomCountComments = getRandomInt(1, 20);
  const comments = Array.from({length: randomCountComments}, generatingСomment);
  return comments;
}

function makePhoto(count){
  return {
    id: count,
    url: `photos/${  count  }.jpg`,
    description: DESCRIPTION[count - 1],
    likes: getRandomInt(15, 200),
    comments: getComments(),
  };
}

function makePhotos(countPhotos){
  const createdPhotos = [];
  for(let i = 1; i <= countPhotos; i++){
    createdPhotos.push(makePhoto(i));
  }
  return createdPhotos;
}

const maxCountPhoto = 25;
makePhotos(maxCountPhoto);
