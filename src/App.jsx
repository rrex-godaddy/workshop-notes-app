import { useState } from "react"
import AddNote from "./AddNote"
import NoteList from "./NoteList"

function App() {
  const [notes, setNotes] = useState([
    'fruits',
    'pick up keys'
  ]);

  const addStrToArray = (str) => {
    const copyOfNotes = Array.from(notes);
    copyOfNotes.push(str);
    setNotes(copyOfNotes);
  }

  return (
    <main>
      <h1>
        Notes
      </h1>
      <AddNote
        addNote = { addStrToArray }
      />
      <NoteList
        notes={ notes }
      />
    </main>
  )
}

export default App
