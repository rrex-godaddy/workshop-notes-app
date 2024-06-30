import { useState } from 'react';

function AddNote({ addNote }) {
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <form
      className="flex flex-col w-1/3"
      onSubmit={ (event) => {
      event.preventDefault();
      addNote(textareaValue);
      setTextareaValue('');
    }}>
      <label
        className="text-2xl"
        htmlFor="notes-textarea">Enter your notes</label>
      <textarea
        className="text-xl border border-gray-300 rounded-lg resize-none min-h-44"
        id="notes-textarea"
        name="notes"
        value={ textareaValue }
        onChange={ (event) => {
          setTextareaValue(event.target.value);
        } }
        placeholder="What's on your mind?"
      >
      </textarea>
      <button
        className="text-white text-xl font-bold rounded-xl text-center bg-[#315C2B]"
        type="submit"
      >
        Add Note
      </button>
    </form>
  )
}

export default AddNote
