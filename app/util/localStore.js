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
    // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
    // 所以要使用 try
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
