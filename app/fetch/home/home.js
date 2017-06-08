import { get } from '../get';

export default {
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
  }
};
