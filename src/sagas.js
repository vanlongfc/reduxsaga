import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  console.log(action);
  try {
    yield put({ type: "USER_FETCH_SUCCEEDED", count: action.payload });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}
export function* helloSaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
