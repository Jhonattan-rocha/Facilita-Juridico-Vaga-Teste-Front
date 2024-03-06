import React, { useEffect } from "react";
import { DivPopUp } from "./styled";
import * as actions from '../../../store/modules/clientereducer/actions';
import { useDispatch, useSelector } from "react-redux";

export default function Modal(props){

    const dispatch = useDispatch();
    const route = useSelector(state => state.clientereducer.route);
    const clientes = useSelector(state => state.clientereducer.clientes);

    const init_point = clientes.result.find(cliente => cliente.cord_x === 0 && cliente.cord_y === 0) 
    
    useEffect(() => {
        dispatch(actions.ROUTE_BUSCAR_REQUEST(init_point));
    }, [init_point, dispatch, props.isOpen]);

    return (
        <DivPopUp>
            <span>Rota de clientes</span>
            <ol>
                {route ? route.result.map(r => {
                    return <li id={r.id}> {r.nome}, ({r.cord_x}, {r.cord_y})</li>
                }): null}
            </ol>
        </DivPopUp>
    )
}
