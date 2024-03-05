import * as type from '../types';
import { toast } from 'react-toastify';

const initialState = {
  clientes: {result: []},
}
// caso precise de mais de um reducer, usar a função combineReducer

export default function recuder(state = initialState, action){
    switch (action.type) {
      case type.CLIENTE_SUCCESS: {
        toast.success("Cliente cadastrado com sucesso")
        return state
      }
      case type.CLIENTE_FALURE: {
        toast.error("Erro ao cadastrar o Cliente")
        return state
      }
      // -----------------
      case type.CLIENTE_EDITAR_SUCCESS: {
        toast.success("Cliente editado com sucesso")
        return state
      }
      case type.CLIENTE_EDITAR_FALURE: {
        toast.error("Erro ao editar o Cliente")
        return state
      }
      // -----------------
      case type.CLIENTE_BUSCAR_SUCCESS: {
        const newState = {...state}
        newState.clientes = action.payload
        return newState
      }
      case type.CLIENTE_BUSCAR_FALURE: {
        toast.error("Erro ao buscar os clientes")
        return state
      }
      // aqui você pode definir suas ações e como o estado deve ser atualizado
      default:
        return state;
    }
};

