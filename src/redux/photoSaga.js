import { call, put, takeEvery } from 'redux-saga/effects';
import { getPhotosSuccess } from './photoState';
import { api } from '../constants';

function* workGetPhotosFetch() {
    const photos = yield call(() => fetch(`${api.recent}1`));
    const photosJson = yield photos.json();
    yield put(getPhotosSuccess(photosJson));
}

function* photoSaga() {
    yield takeEvery('photos/getPhotosFetch', workGetPhotosFetch);
}

export default photoSaga;