import {
  LOGIN,
  CLEAR,
  FETCH_LOCALE,
} from './mutation-types';

export default {
  [LOGIN](state, user) {
    state.authenticated = true;
    state.user.email = user.email;
    state.user.id = user.uid;
  },
  [CLEAR](state) {
    state.authenticated = false;
    state.user.email = null;
    state.user.id = null;
  },
  [FETCH_LOCALE](state, locale) {
    state.locale = locale;
  },
};
