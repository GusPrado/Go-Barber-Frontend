import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const res = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = res.data;

    if (!user.provider) {
      // console.tron.error('Usuário não é prestador');
      toast.error('Usuário não é prestador credenciado');
      yield put(signFailure());
      return;
    }

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seu email e senha');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
