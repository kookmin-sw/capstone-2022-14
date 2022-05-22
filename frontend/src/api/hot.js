import axiosInstance from '../utils/axiosInstance';

class HotAPI {
  getHotProducts(count) {
    return axiosInstance.get(`/api/hot/${count}`);
  }
}

export default new HotAPI();
