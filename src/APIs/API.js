import images from './images.json';
import episode from './episode.json';

function API(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 100);
  });
}

export default function fakeGet(endpoint) {
  switch (endpoint) {
    case '/images':
      return API(images);
    case '/episode':
      return API(episode);
    default:
      console.log('error on fakeGet');
  }
}