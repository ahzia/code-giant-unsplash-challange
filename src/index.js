import './CSS/style.css';
import UnsplashAPI from './JS/API';
import displaySlider from './JS/display';
const unsplashObject = new UnsplashAPI();

document.addEventListener('DOMContentLoaded', () => {
    unsplashObject.getPhotos().then(()=>{
        displaySlider(unsplashObject.images);
    })
});