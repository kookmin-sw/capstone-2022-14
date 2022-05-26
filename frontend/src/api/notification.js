import axiosInstance from '../utils/axiosInstance';

class NotificationAPI {
  notificationSubmit(email, price, product) {
    return axiosInstance.post('/api/notification/submit', {
      email,
      price,
      product,
    });
  }
}

export default new NotificationAPI();
