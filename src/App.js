import { useState } from "react";
import { NavBar } from "./components/navbar/NavBar";
import Button from "@restart/ui/esm/Button";
import { AddNote } from "./components/notes/AddNote";
import { nanoid } from "nanoid";
import Note from './components/notes/Note';
import { Notes } from "./components/notes/Notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const [curNote, setCurNote] = useState({
    id: nanoid(),
    text: "",
    title: "",
  });

  const AddNoteFunc = () => {
    setIsAdding(!isAdding);
  };

  const deleteNote = (id) => {
    console.log(id + "This is from delete");
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleEditNote = (editNote) => {
    console.log(editNote.id + "This is from edit");
    const newNotes = notes.findIndex((note) => note.id === editNote.id);
    setNotes(newNotes);
    setCurNote({ id: editNote.id, text: editNote.text });
    setIsAdding(!isAdding);
  };

  return (
    <div>
      <NavBar notes={notes} />
      <Button className="addNoteBtn" onClick={AddNoteFunc}>
        Add Note
      </Button>
      {isAdding ? (
        <AddNote
          isAdding={isAdding}
          setIsAdding={setIsAdding}
          notes={notes}
          setNotes={setNotes}
          curNote={curNote}
        />
      ) : null}

      <div className="notes-list">
        {notes.map((note) => (
          <Note
            id={note.id}
            title={note.title}
            text={note.text}
            handleDeleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
