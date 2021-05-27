import API from './API.js';
import getRefs from './getRefs.js';
import createGallery from './createGallery.js';
import { infoMsg, alertMsg } from './notification.js';
import scroll from './scroll.js';
import onOpenModal from './basicLightBox.js'

// console.log(API);
const refs = getRefs();


refs.form.addEventListener('submit', onSearch);
refs.loadBtn.addEventListener('click', onLoadBtn);
refs.gallery.addEventListener('click', onOpenModal)

function onSearch(e) {
    e.preventDefault();
    API.searchQuery = e.currentTarget.elements.query.value.trim();
    // console.log(e.currentTarget.elements.query.value)
    if (!API.searchQuery) {
            return
        }
    refs.gallery.innerHTML = '';
  API.resetPage();
  refs.loadBtn.classList.add('is-hidden');
  refs.form.reset();

    API.getImg().then(hits => {
        if (hits.length === 0) {
        alertMsg()
            return
        }
      createGallery(hits);
      refs.loadBtn.classList.remove('is-hidden');
    });
}
function onLoadBtn () {
  API.getImg().then(hits => {
    if (hits.length === 0) {
      infoMsg();
      return
    };
    createGallery(hits);
    refs.loadBtn.classList.remove('is-hidden');
    scroll();
  });
};


  
