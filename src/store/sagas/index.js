import { takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { loginSaga, registerSaga, getUserSaga } from "../sagas/auth";

export function* watchAuth() {
    yield takeLatest(actionTypes.LOGIN, loginSaga);
    yield takeLatest(actionTypes.REGISTER, registerSaga);
    yield takeLatest(actionTypes.GET_USER, getUserSaga);
}
