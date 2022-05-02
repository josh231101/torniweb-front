import actions from './actions'
import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import * as jwt from 'services/jwt'
import { history } from 'index'

const mapAuthProviders = {
  jwt: {
    login: jwt.login,
    logout: jwt.logout,
    currentAccount: jwt.currentAccount
  },
}

export function* LOGIN({ payload }) {
  const { email, password } = payload
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const { authProvider: autProviderName } = yield select((state) => state.settings)
  const success = yield call(mapAuthProviders[autProviderName].login, email, password)
  console.log('success', success)

  if (!success) {
    alert('Error en el login')
  }
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
  yield put({
    type: actions.LOAD_CURRENT_ACCOUNT,
  })
  yield history.push('/')

}

export function* LOAD_CURRENT_ACCOUNT() {
  console.log('LOADING CURRENT ACCOUNT')
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const { authProvider } = yield select((state) => state.settings)
  const user = yield call(mapAuthProviders[authProvider || 'jwt'].currentAccount)
  console.log('user safa info', user)
  if (user) {
    yield put({
      type: 'user/SET_STATE',
      payload: { ...user, authorized: true },
    })
  }
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  const { authProvider } = yield select((state) => state.settings)
  yield call(mapAuthProviders[authProvider].logout)
  yield put({
    type: 'user/RESET_STATE',
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}
