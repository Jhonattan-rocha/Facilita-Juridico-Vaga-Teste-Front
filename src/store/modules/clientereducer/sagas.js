import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* Cliente({payload}){
    try{
        console.log(payload)
        const response = yield call(axios.post, `/cliente/`, payload);
        yield put(actions.CLIENTE_SUCCESS({...response.data}));
        yield put(actions.CLIENTE_BUSCAR_REQUEST());
    }catch(error){
        console.log(error)
        yield put(actions.CLIENTE_FALURE({erro: error}));
    }
}

function* EditarCliente({payload}){
    try{
        const response = yield call(axios.put, `/cliente/${payload.id}`, payload);
        yield put(actions.CLIENTE_EDITAR_SUCCESS({...response.data}));
        yield put(actions.CLIENTE_BUSCAR_REQUEST());
    }catch(error){
        yield put(actions.CLIENTE_EDITAR_FALURE({erro: error}));
    };
};

function* BuscarCliente({payload = {}}){
    try{
        if(!payload.filter){
            payload.filter = ""
        }
        const response = yield call(axios.get, `/clientes/?filter=${encodeURIComponent(payload.filter)}`, payload);
        yield put(actions.CLIENTE_BUSCAR_SUCCESS({...response.data}));
    }catch(error){
        yield put(actions.CLIENTE_BUSCAR_FALURE({erro: error}));
    }
}

function* DeletarCliente({payload}){
    try{
        if(!payload.id){
            return 
        }
        const response = yield call(axios.delete, `/cliente/${payload.id}`, payload);
        yield put(actions.CLIENTE_DELETAR_SUCCESS({...response.data}));
        yield put(actions.CLIENTE_BUSCAR_REQUEST());
    }catch(error){
        console.log(error);
        yield put(actions.CLIENTE_DELETAR_FALURE({error: error}));
    }
}



export default all([
    takeLatest(types.CLIENTE_REQUEST, Cliente),
    takeLatest(types.CLIENTE_EDITAR_REQUEST, EditarCliente),
    takeLatest(types.CLIENTE_BUSCAR_REQUEST, BuscarCliente),
    takeLatest(types.CLIENTE_DELETAR_REQUEST, DeletarCliente),
]);
