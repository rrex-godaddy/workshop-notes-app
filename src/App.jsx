import AddNote from "./AddNote"
import NoteList from "./NoteList"
import { useState } from "react"

function App() {
  const [notes, setNotes] = useState([
    'buy cat tree',
    'find keys'
  ]);

  const addStrToArray =  (str) => {
    const copyOfNotes = Array.from(notes);
    copyOfNotes.push(str);
    setNotes(copyOfNotes)
  }

  return (
    <main>
      <h1>Notes</h1>
      <AddNote
        addNote={ addStrToArray }
      />
      <NoteList
        notes={ notes }
      />
    </main>
  )
}

export default App
