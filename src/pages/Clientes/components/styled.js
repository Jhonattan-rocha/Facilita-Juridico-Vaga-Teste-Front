import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const Title = styled.h1`
    color: ${props => {return props.isRad? "red": "blue"}};
    small{
        font-size: 12pt;
        margin-left: 15px;
        color: #BDBDBD;
    }
`;
export const Container = styled.section`
    width: 100%;
    min-height: 400px;
    min-width: 600px;
    background-color: white;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
`;


export const DivPopUp = styled.div`
    position: fixed; 
    top: 50%;
    left: 50%;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    width: 500px;
    height: 500px;
`;


export const Form = styled.form`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    max-width: 700px;
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`;


export const ContainerCliente = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    overflow-x: hidden;
`;

export const Legend = styled.legend`
    text-align: center;
    margin: auto; 
    color: #050A30;
    margin-top: 7px;
    font-weight: bolder;
    font-size: 1.5em;
    font-size: 30px;
`;


export const InputMask = styled(ReactInputMask)`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding-left: 10px;
    margin-top: 10px; 
`;

export const DivCampos = styled.div`
    padding: 20px;
    background-color: white;
    display: flex;
    overflow: hidden;
    transition: .4s;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;
