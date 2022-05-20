import axiosInstance from '../utils/axiosInstance';

class SearchAPI {
  searchPriceQuery(searchWord, size) {
    return axiosInstance.get(`/api/search/price/${searchWord}/${size}`);
  }

  searchPageQuery(searchWord, page) {
    return axiosInstance.get(`/api/search/${searchWord}/${page}`);
  }

  searchWeeklyPriceQuery(searchWord) {
    return axiosInstance.get(`/api/search/weekly/${searchWord}`);
  }
}

export default new SearchAPI();
