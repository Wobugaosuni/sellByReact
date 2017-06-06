// export const getItem = (key) => {
//   let value;
//   try {
//     value = localStorage.getItem(key);

//   } catch (error) {
//     // 开发环境下提示error
//     if (__DEV__) {
//         console.error('localStorage.getItem error:', error.message);
//     }

//   } finally {
//     return value;
//   }
// };

// export const setItem = (key, value) => {
//   try {
//     localStorage.setItem(key, value);

//   } catch (error) {
//     // 开发环境下提示error
//     if (__DEV__) {
//         console.error('localStorage.setItem error:', error.message);
//     }
//   }
// };

export default {
  getItem (key) {
    let value;
    try {
      value = localStorage.getItem(key);

    } catch (error) {
      // 开发环境下提示error
      /* eslint-disable*/
      if (__DEV__) {
          console.error('localStorage.getItem error:', error.message);
      }

    } finally {
      return value;
    }
  },

  setItem (key, value) {
    try {
      localStorage.setItem(key, value);

    } catch (error) {
      // 开发环境下提示error
      /* eslint-disable no-undef */
      if (__DEV__) {
          console.error('localStorage.setItem error:', error.message);
      }
    }
  }
};
