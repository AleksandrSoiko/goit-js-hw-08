import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(updateLocalStorage, 1000));

setCurrentTime();

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function updateLocalStorage(currentTime) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(currentTime.seconds)
  );
}

function setCurrentTime() {
  if (
    localStorage.length > 0 &&
    Object.keys(localStorage).includes('videoplayer-current-time')
  ) {
    player.setCurrentTime(
      JSON.parse(localStorage.getItem('videoplayer-current-time'))
    );
  }
}
