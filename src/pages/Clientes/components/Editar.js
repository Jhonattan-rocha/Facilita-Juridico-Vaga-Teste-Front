import React from "react";

import { Form, ContainerCliente, Legend, InputMask as ReactInputMask } from "./styled";
import { Painel } from "./styled";
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/modules/clientereducer/actions';

export default function EditarCliente({cliente = {}, close = () => {}}){

    const [nome, setNome] = React.useState(cliente.nome ?? "");
    const [email, setEmail] = React.useState(cliente.email ?? "");
    const [telefone, setTelefone] = React.useState(cliente.telefone ?? "");

    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.CLIENTE_EDITAR_REQUEST({
            id: cliente.id,
            nome: nome, 
            email: email, 
            telefone: telefone}));
        
        close()
    }
    return (
            <ContainerCliente>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Legend>
                        <p>Editar</p>  
                    </Legend>
                    <Painel>
                        <div className="element">
                            <label className="globalLab">Nome: </label>
                            <ReactInputMask id="labsNomeF" className="nomeF" type="text" placeholder="Digite o nome" value={nome} onChange={(e) => setNome(e.target.value)} ></ReactInputMask>
                        </div>
                        <div className="element">
                            <label className="globalLab">Telefone: </label>
                            <ReactInputMask id="labsTel" mask="(99) 99999-9999" maskchar="_" className="labTel" type="text" placeholder="(00) 00000-0000" value={telefone} onChange={(e) => setTelefone(e.target.value)}  />
                        </div>
                        <div className="element">
                            <label className="globalLab">Email: </label>
                            <ReactInputMask id="labsEmail" className="labsEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} ></ReactInputMask>
                        </div>
                    </Painel>
                    <button type="submit" id="submit" name="submit">Editar</button>
                </Form>
            </ContainerCliente>
    );
}

