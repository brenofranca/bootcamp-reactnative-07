import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as CategoriesCreators } from '../ducks/categories';

export function* getCategoriesRequest() {
  try {
    const data = yield call(api.get, '/categories');

    yield put(CategoriesCreators.getCategorySuccess(data));
  } catch (error) {
    yield put(CategoriesCreators.getCategoryFailure('Não foi possível buscar as categorias.'));
  }
}
