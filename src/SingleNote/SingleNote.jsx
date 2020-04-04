import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NotesContext } from "../context/notes";
import { Colours, Container, Loading } from "../commons";
import { DeleteModal } from "./DeleteModal";
import { deleteNoteApi } from '../API/fetchAPI';

export function SingleNote({ push, id, onEdit, onArchive }) {

  const [isModalShowing, setIsModalShowing] = useState(false);
  const { notes, deleteNote } = useContext(NotesContext);
  const note = !!notes ? notes.find(item => item.id === id) : null;

  const toggleModal = () => {
    setIsModalShowing(isModalShowing => !isModalShowing)
  }
  const deleteSingleNote = () => {

    (async () => {
      const response = await deleteNoteApi({ id: note.id })
      if (response) {
        push('/');
      }
    })()

    deleteNote(note);


  };

  return (

    <Container>
      <SingleNoteContainer>

        {note ? (
          <>
            <SingleItem>
              <Header color={note.color}>
                <h1> {note.title}</h1>
              </Header>
              <DateContainer>{new Date(note.date).toLocaleString()}</DateContainer>
              <Text> {note.text}</Text>
            </SingleItem>
            {isModalShowing && <DeleteModal onDelete={() => deleteSingleNote(note.id)}
              onCancel={() => toggleModal()} />
            }
            <ButtonContainer>
              <BtnClick onClick={() => onEdit()}> Edit </BtnClick>
              <BtnClick onClick={() => onArchive()}> { note.isCompleted ? 'Unarchive' : 'Archive' } </BtnClick>
              <BtnClick onClick={toggleModal}> Delete </BtnClick>
              <BtnClick onClick={() => push("/")}> Go Back </BtnClick>
            </ButtonContainer>
          </>
        )
          :
          <Loading />
        }
      </SingleNoteContainer>
    </Container>

    
  );
}
const SingleNoteContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  z-index: -1;
`;

const SingleItem = styled.div`
  display: inline-block;
  border-radius: 20px;
  height: 480px;
  width: calc(100% / 3 * 2 );
  background-color: #E7DFE5;;
  /* box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.5); */
  overflow: hidden;

`;
const Header = styled.div`
  background-color: ${p => p.color};
  margin: -30px auto;
  font-size: 19px;
  border-radius: 20px 20px 0 0;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h1 {
    padding: 10px 8px;
    text-align: center
  }
`;

const DateContainer = styled.div`
  font-family: "Arial";
  font-size: 16px;
  color: black;
  padding: 15px 0;
  line-height: 13px;
  border-bottom: 1px solid gray;
  margin: 0 10px;
`;
const Text = styled.div`
  margin-top: 30px;
  font-family: "Arial";
  color: black;
  padding: 0 25px;
  font-size: 18px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const BtnClick = styled.button`
  height: 40px;
  width: 120px;
  font-size: 18px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  outline: none;
  margin-bottom: 12px;
  &:hover {
    color: ${Colours.primary};
    background-color: ${Colours.primary};
    color: #fff;
    transition: all .3s ease-out;
    /* box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5); */
  }
`;