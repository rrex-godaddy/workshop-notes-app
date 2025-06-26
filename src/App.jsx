import AddNote from "./AddNote"
import NoteList from "./NoteList"
import { useState } from "react"

function App() {
  const [notes, setNotes] = useState([
    'buy cat tree',
    'Plan meals for the week, make a shopping list, and check what’s already in the pantry before heading to the store.',
    'find keys'
  ]);

  const addStrToArray =  (str) => {
    const copyOfNotes = Array.from(notes);
    copyOfNotes.push(str);
    setNotes(copyOfNotes)
  }

  return (
    <main className="flex flex-col items-center h-full pt-36">
      <h1 className="text-8xl font-black mb-6 font-heading text-[#EB5E28]">Notes</h1>
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
