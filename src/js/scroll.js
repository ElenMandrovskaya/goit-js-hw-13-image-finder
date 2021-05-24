import getRefs from './getRefs.js';
const refs = getRefs();

export default function scroll() {
//   window.scrollTo({
//     top: document.documentElement.offsetHeight,
//     behavior: 'smooth',
//   });
    refs.loadBtn.scrollIntoView({
      behavior: "smooth",
      block: refs.loadBtn.dataset.pos
    });
  
}