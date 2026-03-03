import { logError, logInfo } from '@edx/frontend-platform/logging';
import { call, put, takeEvery } from 'redux-saga/effects';

// Actions
import {
  FORGOT_PASSWORD,
  forgotPasswordBegin,
  forgotPasswordForbidden,
  forgotPasswordServerError,
  forgotPasswordSuccess,
} from './actions';
import { forgotPassword } from './service';

// Services
export function* handleForgotPassword(action) {
  try {
    yield put(forgotPasswordBegin());

    yield call(forgotPassword, action.payload.email);

    yield put(forgotPasswordSuccess(action.payload.email));
  } catch (e) {
    if (e.response && e.response.status === 403) {
      yield put(forgotPasswordForbidden());
      logInfo(e);
    } else if (e.response && e.response.status === 400) {
      const errorData = e.customAttributes?.httpErrorResponseData
        ? JSON.parse(e.customAttributes.httpErrorResponseData)
        : (e.response?.data || {});
      const userMessage = errorData.error || "Произошла ошибка. Попробуйте обновить страницу или проверьте подключение к Интернету.";
      const isUserNotFound = errorData.error_code === 'user_not_found';
      yield put(forgotPasswordServerError(userMessage, isUserNotFound));
    } else {
      yield put(forgotPasswordServerError());
      logError(e);
    }
  }
}

export default function* saga() {
  yield takeEvery(FORGOT_PASSWORD.BASE, handleForgotPassword);
}
