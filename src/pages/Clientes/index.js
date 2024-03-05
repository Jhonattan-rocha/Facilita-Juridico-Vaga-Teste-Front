import React, { useEffect } from "react";

import { Painel, Form, Container, Legend, InputMask as ReactInputMask, DivBotoesClientesNavegacao, ClienteItem, DivContainerPrincipal, DropDownField } from "./styles";
import { FaTrash, FaUserEdit } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/clientereducer/actions';

import { toast } from 'react-toastify';
import Editar from './components/Editar';

export default function CadastroCliente(){

    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [pesquisar, setPesquisar] = React.useState("");
    const [field, setField] = React.useState("");

    const clientes = useSelector(state => state.clientereducer.clientes);
    const [mostrar, setMostrar] = React.useState("cad");
    const [clienteSelecionado, setClienteSelecionado] = React.useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.CLIENTE_BUSCAR_REQUEST())
    }, [mostrar, dispatch])

    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.CLIENTE_REQUEST({
            nome: nome, 
            email: email, 
            telefone: telefone.replace(/\D+/g, "")}));
        setNome("");
        setEmail("");
        setTelefone("");
    }

    return (
       <>
            <DivContainerPrincipal>
                <DivBotoesClientesNavegacao>
                    <AiOutlineSearch size={30} style={{margin: 10}} cursor={'pointer'} onClick={() => setMostrar("search")}></AiOutlineSearch>
                    <FaUserEdit size={30} style={{margin: 10}} cursor={'pointer'} onClick={() => setMostrar("list")}></FaUserEdit>
                    <AiOutlineUserAdd size={30} style={{margin: 10}} cursor={'pointer'} onClick={() => setMostrar("cad")}></AiOutlineUserAdd>
                </DivBotoesClientesNavegacao>
                {mostrar.match('cad') ?
                    <Container>

                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Legend>
                            <p>Cadastro de Clientes</p>  
                        </Legend>
                        <Painel>
                                <div className="element">
                                    <label className="globalLab">Nome: </label>
                                    <ReactInputMask id="labsNomeF" className="nomeF" type="text" placeholder="Digite o nome" value={nome} onChange={(e) => setNome(e.target.value)} required></ReactInputMask>
                                </div>
                                <div className="element">
                                    <label className="globalLab">E-mail: </label>
                                    <ReactInputMask id="labsEmail" className="labEmail" type="text" placeholder="Digite o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                </div>
                                <div className="element">
                                    <label className="globalLab">Telefone: </label>
                                    <ReactInputMask id="labsTel" mask="(99) 99999-9999" maskchar="_" className="labTel" type="text" placeholder="(00) 00000-0000" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                                </div>
                        </Painel>
                        <button type="submit" id="submit" name="submit">Cadastrar</button>
                    </Form>
                </Container>
                : null}
                {mostrar.match('list') ?
                <Container onLoad={() => {
                }}>
                    <Form>
                        {clientes ? clientes.result.map(cli => {
                            return (
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                                    <ClienteItem onClick={() => {
                                        setClienteSelecionado(cli);
                                        setMostrar('edit')
                                    }} key={cli.id}>
                                        <p>{cli.nome}</p>
                                    </ClienteItem>
                                    <FaTrash size={20} cursor={'pointer'} onClick={() => {
                                        dispatch(actions.CLIENTE_DELETAR_REQUEST({id: cli.id}));
                                    }}></FaTrash>
                                </div>
                            );
                        }): null}
                    </Form>
                </Container>
                : null}
                {mostrar.match('search') ?
                <Container>
                    <div id="comentar">
                        <label>Pesquisar</label>
                        <div id="inputsubmit">
                            <input value={pesquisar} onChange={(e) => {
                                setPesquisar(e.target.value)
                                if(e.target.value){
                                    dispatch(actions.CLIENTE_BUSCAR_REQUEST({filter: `${field},${e.target.value}`}));
                                }else{
                                    dispatch(actions.CLIENTE_BUSCAR_REQUEST());
                                }
                            }}></input>
                            <AiOutlineSearch size={30} cursor={'pointer'} color="black" onClick={() => {
                                if(pesquisar){
                                    dispatch(actions.CLIENTE_BUSCAR_REQUEST({filter: `${field},${pesquisar}`}));
                                }else{
                                    dispatch(actions.CLIENTE_BUSCAR_REQUEST());
                                }
                            }}></AiOutlineSearch>
                        </div>
                        <DropDownField onChange={(e) => setField(e.target.value)}>
                            <option value="nome">Nome</option>
                            <option value="email">Email</option>
                            <option value="telefone">Telefone</option>
                        </DropDownField>
 
                    </div>
                    <Form>
                        {clientes ? clientes.result.map(cli => {
                            return (
                                <ClienteItem onClick={() => {
                                    let emps = clientes.find(cl => cl.email === cli.email);
                                    try{
                                        setClienteSelecionado(emps);
                                        setMostrar('edit');
                                    }catch(err){
                                        toast.error("Não é possível alterar dados de outro usuário")
                                    }
                                }} key={cli.id}>
                                    <p>{cli.nome}</p>
                                </ClienteItem>
                            );
                        }): null}
                    </Form>
                </Container>
                : null}
                {mostrar.match('edit') ? <Editar cliente={clienteSelecionado} close={() => setMostrar('list')}></Editar> : null}
            </DivContainerPrincipal>
       </>
    );
}

