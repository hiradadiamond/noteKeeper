import React, { useState } from "react";
import { nanoid } from "nanoid";
import { MdDeleteForever } from "react-icons/md";

export const AddNote = ({
  isAdding,
  setIsAdding,
  notes,
  setNotes,
  curNote,
}) => {
  const [noteContent, setNoteContent] = useState(curNote.text);
  const [noteTitle, setNoteTitle] = useState(curNote.title);
  const saveNote = () => {
    const newNote = {
      id: nanoid(),
      body: noteContent,
      title:noteTitle
    };
    const newList = [ newNote, ...notes];
    setIsAdding();
    setNotes(newList);
  };
  const noteDiv = (
    <div className="add">
      <div className="note">
      <input value={noteTitle} onChange={e=>setNoteTitle(e.target.value)} />
        <textarea value={noteContent} onChange={e=>setNoteContent(e.target.value)} />
        <div className="note-footer">
          <button onClick={saveNote}>Save</button>

          <MdDeleteForever className="delete-icon" size="1.3em" />
        </div>
      </div>
      <hr />
    </div>
  );
  return <div>{isAdding ? noteDiv : null}</div>;
};