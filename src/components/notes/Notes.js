import React, { useState } from "react";
import Note from "./Note";
export const Notes = ({ notes, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          text={note.text}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
};
