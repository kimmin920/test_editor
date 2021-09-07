import images from './images.json';

function API(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 100);
  });
}

export const getImages = API(images);
