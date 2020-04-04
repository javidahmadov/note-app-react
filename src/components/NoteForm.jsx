import React, { useState } from "react";
import styled from "styled-components";

import { Container } from '../commons/Container';
import { Colours } from '../commons/colours';

export function NoteForm({
    initial = {},
    header,
    onSubmit }) {

    const [fields, setFields] = useState({
        title: '',
        text: '',
        color: '#d32727',
        ...initial
  })

 const validate = () => {
   return fields.title && fields.text && fields.color
 }
  const onChange = (e) => {
    const { name, value } = e.target;
    setFields(fields => ({
      ...fields,
      [name]: value
    }))
  }

  const onSubmitBtn = (e) => {
    e.preventDefault();
    if(validate()){
      onSubmit({
        title: fields.title,
        text: fields.text,
        color: fields.color
      })
    }
  }







  return (
    <Container>
      <Form onSubmit={onSubmitBtn}>
        <Header>{header}</Header>
        <TextInput
          name="title"
          type="text"
          placeholder="Title"
          primary={Colours.primary}
          value={fields.title}
          onChange={onChange}
        />
        <TextArea
          name="text"
          placeholder="Note text"
          value={fields.text}
          onChange={onChange} />

        <ColorContainer>
          <ColorLabel>Color: </ColorLabel>
          <Label color={Colours.color1}>
            <RadioLabel
              name="color"
              type="radio"
              value={Colours.color1}
              checked={fields.color === Colours.color1}
              onChange={onChange}
            />
            <RadioSpan color={Colours.color1}></RadioSpan>
          </Label>
          <Label color={Colours.color2}>
            <RadioLabel
              type="radio"
              name="color"
              value={Colours.color2}
              checked={fields.color === Colours.color2}
              onChange={onChange}
            />
            <RadioSpan color={Colours.color2}></RadioSpan>
          </Label>
          <Label color={Colours.color3}>
            <RadioLabel
              type="radio"
              name="color"
              value={Colours.color3}
              checked={fields.color === Colours.color3}
              onChange={onChange} />
            <RadioSpan color={Colours.color3}></RadioSpan>
          </Label>
          <Label color={Colours.color4}>
            <RadioLabel
              type="radio"
              name="color"
              value={Colours.color4}
              checked={fields.color === Colours.color4}
              onChange={onChange}
            />
            <RadioSpan color={Colours.color4}></RadioSpan>
          </Label>
        </ColorContainer>
        <Button>CREATE</Button>
      </Form>
    </Container>

  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  margin: 50px auto;
  padding: 30px 25px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  border-radius: 10px;
`;

const Header = styled.div`
  font-family: "Segoe UI";
  font-size: 40px;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;
const TextInput = styled.input`
  margin-top: 20px;
  display: block;
  padding: 10px 10px;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;  
  font-size: 18px;
  transition: all 0.3s ease;
  background-color: white;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5);
  &:focus {
    border-color: #d32727;
    outline: none;
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.5);
  }
`;

const TextArea = styled.textarea`
  margin-top: 20px;
  font-size: 15px;
  padding: 8px;
  height: 140px;
  width: 100%;
  border-radius: 10px;
  border: none;
  outline: none;  
  resize: none;
  transition: all .5s ease;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5);
  &:focus {
    border-color: grey;
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.5);
  }
`;




const ColorContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 50px;
`;

const ColorLabel = styled.label`
  font-size: 20px;
  position: relative;
  top: -5px;
`;

const Label = styled.label`
input {
    display: none;
  }
  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin: 10px 0;
    background-color: ${p => p.color};
    border: 4px solid transparent;
    transition: all 0.3s ease;
  }
  input:checked + span {
    border-color: white;
  }
`;
const RadioSpan = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${p => p.color};
  border: 5px inset transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  
`;

const RadioLabel = styled.input`
  display: none;
  &:checked + ${RadioSpan} {
    border-color: white;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);
    justify-content: space-between;
  }
`;

const Button = styled.button`
  margin: 20px 5px;
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid grey;
  background-color: #fff;
  border-radius: 7px;
  cursor: pointer;
  font-size: 16px;
  color: grey;
  font-weight: bold;
  transition: .3s all;
  &:hover {
    border-color: black;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    background-color: grey;
    /* transform: translateY(-5px); */
    cursor: pointer;
  }
`;