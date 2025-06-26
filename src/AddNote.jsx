import { useState } from "react";

function AddNote({ addNote }) {
  const [textareaValue, setTextareaValue] = useState('')

  return (
    <form
      className="flex flex-col w-1/3"
      onSubmit={ (event) =>  {
        event.preventDefault();
        addNote(textareaValue);
        setTextareaValue('');
      }}
    >
      <label
        className="text-2xl font-light mt-4 mb-2 font-subheading text-[#315C2B]"
        htmlFor="notes-textarea"
      >Enter your notes</label>
      <textarea
          className="text-2xl border border-gray-300 rounded-lg min-h-44 mb-4 px-4 py-2 font-text bg-[#FAFFFD] text-[#394053]"
          id="notes-textarea"
          name="notes"
          value={ textareaValue }
          onChange={
            (event) => {
                setTextareaValue(event.target.value);
            }
          }
          placeholder="What's on your mind?"
        >
        </textarea>
      <button
        className="text-white text-xl rounded-xl text-center bg-[#315C2B] mb-4 py-2 font-subheading"
        type="submit"
      >
            Add Note
        </button>
    </form>
  )
}

export default AddNote
