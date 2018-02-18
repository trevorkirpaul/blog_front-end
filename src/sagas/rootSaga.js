import { all } from 'redux-saga/effects';
import { startFetchBlogs } from './blog';

export default function* rootSaga() {
  yield all([startFetchBlogs()]);
}
