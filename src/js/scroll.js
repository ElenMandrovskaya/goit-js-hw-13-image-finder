import getRefs from './getRefs.js';
const refs = getRefs();

export default function scroll() {
    refs.loadBtn.scrollIntoView({
      behavior: "smooth",
      block: refs.loadBtn.dataset.pos
    });
}