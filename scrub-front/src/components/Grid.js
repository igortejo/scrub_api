import React from "react";
import styled from "styled-components";
import axios from "axios"
import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
`;


export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;




const Grid = ( {users}) => {   //vai receber usuarios do banco de dados
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th>Idade</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>

            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td width="30%">{item.idade}</Td>
                        <Td width="5%">
                            <FaEdit />
                        </Td> 
                        <Td width="5%">
                            <FaTrash />
                        </Td>
                    </Tr>
                ))}
            </Tbody>

        </Table>
    );
};

export default Grid; 