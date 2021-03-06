import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import post, { postSaga } from './post';
import reload, { reloadSaga } from './reload';
import tagkeyword, { tagkeywordSaga } from './tagkeyword';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  post,
  reload,
  tagkeyword,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    postSaga(),
    reloadSaga(),
    tagkeywordSaga(),
  ]);
}

export default rootReducer;
