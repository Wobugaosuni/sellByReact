import { get } from '../get';

export default {
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
