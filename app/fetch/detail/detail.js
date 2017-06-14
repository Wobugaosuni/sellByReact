import { get } from '../get';

export default {
  /**
   * 获取商户详情
   * @param {any} id
   * @param {any} successCallback
   */
  getSellerInfo(id, successCallback) {
    var result = get(`/api/sellerinfo/${id}`);

    result.then(response => {
      return response.json();

    }).then(json => {
      successCallback(json);

    }).catch(error => {
      if (__DEV__) {
        console.log('getSellerInfo fail', error);
      }
    });
  }
};
