import { useState } from "react";
import NoteTextArea from "./NoteTextArea";

function App() {

  const [notes, setNotes] = useState([]);

  const addNewNotesHelperFunction = (newNote) => {
    const tempNotes = [...notes];
    tempNotes.push(newNote);
    setNotes(tempNotes);
  }

  return (
    <>
      <NoteTextArea
        addNewNotes={ addNewNotesHelperFunction }
      />
      <ul>
        { notes?.map((note) => <li key={note}> { note } </li>) }
      </ul>
    </>
  );
}

export default App;
