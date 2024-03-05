import {all} from 'redux-saga/effects';

import ClienteSagas from './clientereducer/sagas';

export default function* rootSaga(){
    return yield all([ClienteSagas]);
}
