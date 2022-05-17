import axiosInstance from '../utils/axiosInstance';

class SearchAPI {
  searchPriceQuery(searchWord, size) {
    return axiosInstance.get(`/api/search/price/${searchWord}/${size}`);
  }

  searchPageQuery(searchWord, page) {
    return axiosInstance.get(`/api/search/${searchWord}/${page}`);
  }
}

export default new SearchAPI();
