import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export default {
  key: '21740199-d7b6e81c83ae38a8fb2587200',
  perPage: 12,
  pageNumber: 1,
  searchQuery: '',
  async getImg(searchQuery) {
    const request = `/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=${this.perPage}&key=${this.key}`;
      const {
          data: { hits },
      } = await axios.get(request);
    this.pageNumber += 1;
     return hits;
    },
  
  resetPage() {
    this.pageNumber = 1;
  },
};