import { useState, useEffect } from "react";
import { NavBar } from "./components/navbar/NavBar";
import Button from "@restart/ui/esm/Button";
import { AddNote } from "./components/notes/AddNote";
import { nanoid } from "nanoid";
import Note from "./components/notes/Note";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const [curNote, setCurNote] = useState({
    id: nanoid(),
    title: "",
    text: "",  
  });

  const AddNoteFunc = () => {
    setIsAdding(!isAdding);
  };

  const deleteNote = (id) => {
    console.log(id + "This is from delete");
    const newNotes = notes.filter((note) => note.id !== id);
    console.log(newNotes);
    setNotes(newNotes);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {}, [notes]);

  const fetchAllData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setNotes(response.data);
    });
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
          counter ={notes.length}
        />
      ) : null}
      <div className="notes-list">
        {notes.map((note) => (
          <Note key={note.id}
            id={note.id}
            title={note.title}
            text={note.body}
            handleDeleteNote={() => {
              deleteNote(note.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
