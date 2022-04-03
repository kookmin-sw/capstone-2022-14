import axiosInstance from '../utils/axiosInstance';

class SearchAPI {
  searchQuery(searchWord) {
    return axiosInstance.get('/api/search/' + searchWord);
  }
}

export default new SearchAPI();
