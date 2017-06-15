import { get } from '../get';

export default {
  /**
   * 获取搜索结果 —— 商户列表
   * @param {any} city
   * @param {any} page
   * @param {any} category
   * @param {any} keywords
   * @param {any} successCallback
   */
  getSearchList(city, page, category, keywords, successCallback) {
    const keywordsStr = keywords.length ? `/${encodeURIComponent(keywords)}` : '';

    var result = get(`/api/searchlist/${encodeURIComponent(city)}/${page}/${category}${keywordsStr}`);

    result.then(response => {
      return response.json();

    }).then(json => {
      successCallback(json);

    }).catch(error => {
      if (__DEV__) {
        console.log('getSearchList fail', error);
      }
    });
  }
};
