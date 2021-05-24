import getRefs from './getRefs.js'
import imgCard from '../templates/imgCard.hbs'
const refs = getRefs();

export default function createGallery(hits) {
    const markup = imgCard(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
}

 
