import React from 'react';
import styled from 'styled-components'
import {Colours} from '../commons/index'
export function DeleteModal(props) {
 
    return (
        <ModalWindow>
            <Header>Do you want to delete this note from Homepage?</Header>
            <Button>
            <BtnClick className="delete-btn" onClick={props.onDelete}>Delete</BtnClick>
            <BtnClick onClick={props.onCancel}>Cancel</BtnClick>

            </Button>
        </ModalWindow>
    )
}

const ModalWindow = styled.div`
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    position: absolute;
    margin: 80px auto 0 auto;
    height: 280px;
    background: #fff;
    padding: 20px 15px;
    box-shadow: 0 0 25px 0px rgba(0,0,0,.3);
`

const Header = styled.header`
    padding: 20px 10px;
    font-size:20px;
    margin: 0 auto ;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;
    border-bottom: 1px solid black;
`

const BtnClick = styled.button`
    width: 120px;
    height: 40px;
    margin-bottom: 35px;
    outline: none;
    border: 1px solid #007bff;
    border-radius: 4px;
    
    font-size: 16px;
    font-weight: 700;
    color:  #fff;
    cursor: pointer;
    transition: all .3s ease;
    background-color: #007bff;
    &:hover {
    background-color: #0062cc;
    color: #fff;
  };
`


const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`