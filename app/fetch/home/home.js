import { get } from '../get';

export default {
  /**
   * 获取 首页 —— 广告（超值特惠）
   * @param {any} successCallback
   */
  getHomeAd (successCallback) {
    var result = get('/api/homead');

    result.then(response => {
      return response.json();

    }).then(json => {
      successCallback(json);

    }).catch(error => {
      if (__DEV__) {
        console.log('getHomeAdData fail', error);
      }
    });
  },

  /**
   * 获取 首页 —— 推荐列表（猜你喜欢）
   * @param {any} city
   * @param {any} page
   * @param {any} successCallback
   */
  getHomeList (city, page, successCallback) {
    var result = get(`api/homelist/${city}/${page}`);

    result.then(response => {
      return response.json();

    }).then(json => {
      successCallback(json);

    }).catch(error => {
      if (__DEV__) {
        console.log('getHomeList fail', error);
      }
    });
  }
};
