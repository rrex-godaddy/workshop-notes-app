import { useState } from 'react';

import Notes from './Notes';
import NoteEntry from './NoteEntry';

function App() {

  const [notes, setNotes] = useState([])

  const addNewNoteHandler = (newNote) => {
    let tempNotes = [...notes];
    tempNotes.push(newNote);
    setNotes(tempNotes);
  }

  return (
    <main className='flex flex-col items-center h-screen mt-32'>
      <h1
        className='mb-10 text-6xl font-bold'
      > Notes </h1>
      <NoteEntry
        addNewNote={ addNewNoteHandler }
      />
      <Notes
        notes={ notes }
      />
    </main>
  );
}

export default App;
