import React, { useContext } from "react";
import uuid from "react-uuid"; 

import { NotesContext } from '../../context/notes'
import { NoteForm } from '../../components/NoteForm';
import { addNoteApi } from '../../API/fetchAPI'
export function Create({ history }) {
  const { addNote } = useContext(NotesContext);

  const onSubmit = (note) => {
    const newNote = {
      id: uuid(),
      date: Date.now(),
      isCompleted: false,
      ...note
    }
    addNote(newNote);

    (async () => {
      const response = await addNoteApi(newNote);
      if(response){
        history.push('/');
      }
    })()
  }



  return (
    
    <NoteForm header="Create Note" onSubmit={onSubmit}/>
  );
}