import API from './API.js';
import getRefs from './getRefs.js';
import createGallery from './createGallery.js';
import { infoMsg, alertMsg } from './notification.js';
// console.log(API);
const refs = getRefs();

refs.form.addEventListener('submit', onSearch);
refs.loadBtn.addEventListener('click', onLoadBtn);

function onSearch(e) {
    e.preventDefault();
    API.searchQuery = e.currentTarget.elements.query.value.trim();
    // console.log(e.currentTarget.elements.query.value)
    if (!API.searchQuery) {
            return
        }
    refs.gallery.innerHTML = '';
    API.resetPage();
    API.getImg().then(hits => {
        if (hits.length === 0) {
        alertMsg()
            return;
        }
        createGallery(hits)
    });
}
function onLoadBtn () {
  API.getImg().then(hits => {
    if (hits.length === 0) {
      infoMsg();
      return;
    }
    createGallery(hits);
    refs.loadBtn.classList.remove('is-hidden');
  });
};
