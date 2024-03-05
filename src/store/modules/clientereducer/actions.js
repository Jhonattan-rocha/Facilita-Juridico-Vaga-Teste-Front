import * as types from '../types'

export function CLIENTE_REQUEST(payload){
    return {
        type: types.CLIENTE_REQUEST,
        payload: payload,  
    };
}

export function CLIENTE_SUCCESS(payload){
    return {
        type: types.CLIENTE_SUCCESS,
        payload: payload,  
    };
}

export function CLIENTE_FALURE(payload){
    return {
        type: types.CLIENTE_FALURE,
        payload: payload,  
    };
}

// -------------------------------------

export function CLIENTE_EDITAR_REQUEST(payload){
    return {
        type: types.CLIENTE_EDITAR_REQUEST,
        payload: payload,  
    };
}

export function CLIENTE_EDITAR_SUCCESS(payload){
    return {
        type: types.CLIENTE_EDITAR_SUCCESS,
        payload: payload,  
    };
}

export function CLIENTE_EDITAR_FALURE(payload){
    return {
        type: types.CLIENTE_EDITAR_FALURE,
        payload: payload,  
    };
}

// -------------------------------------------------------------

export function CLIENTE_BUSCAR_REQUEST(payload){
    return {
        type: types.CLIENTE_BUSCAR_REQUEST,
        payload: payload,  
    };
}

export function CLIENTE_BUSCAR_SUCCESS(payload){
    return {
        type: types.CLIENTE_BUSCAR_SUCCESS,
        payload: payload,  
    };
}

export function CLIENTE_BUSCAR_FALURE(payload){
    return {
        type: types.CLIENTE_BUSCAR_FALURE,
        payload: payload,  
    };
}

// -------------------------------------------------

export function CLIENTE_DELETAR_REQUEST(payload){
    return {
        type: types.CLIENTE_DELETAR_REQUEST,
        payload: payload,  
    };
}

export function CLIENTE_DELETAR_SUCCESS(payload){
    return {
        type: types.CLIENTE_DELETAR_SUCCESS,
        payload: payload,  
    };
}

export function CLIENTE_DELETAR_FALURE(payload){
    return {
        type: types.CLIENTE_DELETAR_FALURE,
        payload: payload,  
    };
}
