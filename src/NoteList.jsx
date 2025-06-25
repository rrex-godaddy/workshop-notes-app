function NoteList({ notes }){
  console.log('[DEBUG] notes', notes)

  return (
    <ul>
      {
        notes.map((note, index) => {
          <li key={ index }>
            { note }
          </li>
        })
      }
    </ul>
  )
}

export default NoteList
