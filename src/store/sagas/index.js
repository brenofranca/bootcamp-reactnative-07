import { all, takeLatest } from 'redux-saga/effects';

import { getCategoriesRequest } from './categories';
import { Types as CategoryTypes } from '../ducks/categories';

export default function* rootSaga() {
  return yield all([takeLatest(CategoryTypes.GET_CATEGORIES_REQUEST, getCategoriesRequest)]);
}
