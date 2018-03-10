export const USER_LOGGED_IN = 'USER_LOGGED_IN',
             USER_LOGGED_OUT = 'USER_LOGGED_OUT',
             STORE_USER_DATA = 'STORE_USER_DATA';

const actions = {
  updateUserStatus(status) {
    if (status === null) {
      return { type: USER_LOGGED_OUT };
    } else {
      return { type: USER_LOGGED_IN };
    }
  },

  getCurrentUser(history) {
    return function storeUserData(dispatch) {
      fetch('/auth/current-user', {
        headers: {
          authorization: localStorage.getItem('AUTH_TOKEN')
        }
      }).then(res => {
        return res.json();
      })
        .then(data => {
          const provider = data.provider;
          dispatch({
            type: STORE_USER_DATA,
            payload: data[provider]
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  onUserAuthentication(isLoggedIn, history) {
    if (isLoggedIn) {
      history.push('/dashboard');
      return { type: USER_LOGGED_IN };
    } else {
      localStorage.removeItem('AUTH_TOKEN');
      history.push('/');
      return { type: USER_LOGGED_OUT };
    }
  },

  // onLocalSignUp(email, password, history) {
  //   email = 'test@test.com';
  //   password = 'test123';
  //   return function (dispatch) {
  //     console.log(email, password, history);
  //     axios.post('/auth/sign-up', { email, password })
  //       .then(user => {
  //         console.log(user);
  //         console.log('success!');
  //       });
  //   }
  // }
};

export default actions;