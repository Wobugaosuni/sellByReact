import { get } from '../get';

export default {
  /**
   * 获取用户订单列表
   * @param {any} username
   * @param {any} successCallback
   */
  getUserOrderList (username, successCallback) {
    var result = get(`/api/orderlist/${username}`);

    result.then(response => {
      return response.json();

    }).then(json => {
      successCallback(json);
      console.log('getUserOrderList success', json);

    }).catch(error => {
      if (__DEV__) {
        console.log('getUserOrderList fail', error);
      }
    });
  }
};
