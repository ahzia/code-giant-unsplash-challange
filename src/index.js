import './CSS/style.css';
import UnsplashAPI from './JS/API.js';
import displaySlider from './JS/display.js';

const unsplashObject = new UnsplashAPI();

document.addEventListener('DOMContentLoaded', () => {
  unsplashObject.getPhotos().then(() => {
    displaySlider(unsplashObject.images);
  });
});