function NoteList({ notes }) {

  return (
    <ul  className="w-1/3">
      { notes.map( (note, index) =>
        <li
          key={ index }
          className="rounded-lg shadow-md min-h-24 text-lg bg-[#f4d616]"
        >
          { note }
        </li>)
      }
    </ul>
  )
}

export default NoteList
