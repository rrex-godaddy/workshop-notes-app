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
    <div className='flex flex-col items-center h-screen bg-[#DDA448]'>
      <NoteTextArea
        addNewNotes={ addNewNotesHelperFunction }
      />
      <ul className="block min-h-40 bg-[#8D6A9F]">
        { notes?.map((note) => <li key={note}> { note } </li>) }
      </ul>
    </div>
  );
}

export default App;
