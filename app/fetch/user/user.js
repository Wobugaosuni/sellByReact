import { get } from '../get';
import { post } from '../post';

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
  },

  /**
   * 提交评论
   * @param {any} id
   * @param {any} value
   * @param {any} successCallback
   */
  postComment (id, value, successCallback) {
    var result = post(
      '/api/submitcomment',
      {
        id,
        comment: value
      }
    );

    result.then(response => {
      return response.json();

    }).then(json => {
      successCallback(json);
      console.log('postComment success', json);

    }).catch(error => {
      if (__DEV__) {
        console.log('postComment fail', error);
      }
    });
  }
};
