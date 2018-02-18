import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { BLOGS } from '../config';

// BLOGS = GET, POST for API
// POST needs title:string and body:text

// fetch all blog posts : BLOG:FETCH_ALL
function* fetchBlogs(action) {
  try {
    const blogs = yield call(axios.get, BLOGS);
    // if succesful
    yield put({
      type: 'BLOG:RECIEVE_ALL',
      loading: false,
      error: false,
      posts: blogs.data,
    });
  } catch (e) {
    yield put({
      type: 'BLOG:FAIL_FETCH',
      loading: false,
      error: true,
    });
  }
}

// listen for dispatches
export function* startFetchBlogs() {
  yield takeEvery('BLOG:FETCH_ALL', fetchBlogs);
}
