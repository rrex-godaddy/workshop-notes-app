function NoteList({ notes }) {
  console.log('[DEBUG] props', notes);

  return (
    <ul>
      { notes.map( (note, index) =>
        <li key={ index }>
          { note }
        </li>)
      }
    </ul>
  )
}

export default NoteList
