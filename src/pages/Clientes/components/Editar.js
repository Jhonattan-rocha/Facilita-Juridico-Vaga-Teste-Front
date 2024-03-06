import React from "react";

import { Form, ContainerCliente, Legend, InputMask as ReactInputMask } from "./styled";
import { DivCampos } from "./styled";
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/modules/clientereducer/actions';

export default function EditarCliente({cliente = {}, close = () => {}}){

    const [nome, setNome] = React.useState(cliente.nome ?? "");
    const [email, setEmail] = React.useState(cliente.email ?? "");
    const [telefone, setTelefone] = React.useState(cliente.telefone ?? "");
    const [cordenadas, setCordenadas] = React.useState(`(${cliente.cord_x}, ${cliente.cord_y})`.split(','));

    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.CLIENTE_EDITAR_REQUEST({
            id: cliente.id,
            nome: nome, 
            email: email, 
            telefone: telefone,
            cord_x: cordenadas[0].replace(/\D+/g, ""),
            cord_y: cordenadas[1].replace(/\D+/g, "")
        }));
        
        close()
    }
    return (
            <ContainerCliente>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Legend>
                        <p>Editar</p>  
                    </Legend>
                    <DivCampos>
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
                        <div className="element">
                            <label className="globalLab">Cordenadas: </label>
                            <ReactInputMask id="labsCord" mask="(9,9)" maskchar="_" className="labsCord" type="text" placeholder="(0,0)" value={cordenadas} onChange={(e) => setCordenadas(String(e.target.value).split(","))} required />
                        </div>
                    </DivCampos>
                    <button type="submit" id="submit" name="submit">Editar</button>
                </Form>
            </ContainerCliente>
    );
}

