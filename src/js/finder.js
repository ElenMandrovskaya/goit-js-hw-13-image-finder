import API from './API.js';
import getRefs from './getRefs.js';
import createGallery from './createGallery.js';
// console.log(API);
const refs = getRefs();

refs.input.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();
    API.searchQuery = e.currentTarget.elements.query.value.trim();
    // console.log(e.currentTarget.elements.query.value)
    refs.gallery.innerHTML = '';
    API.resetPage();

    API.getImg().then(hits => {
        if (hits.length === 0) {
          return;
        }
        createGallery(hits)
    }
    );
}

