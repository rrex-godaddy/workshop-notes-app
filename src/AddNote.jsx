import { useState } from 'react';

function AddNote() {
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <form
      onSubmit={ (event) => {
      event.preventDefault();
      console.log("I want to add this note", textareaValue);
      setTextareaValue('');
    }}>
      <label
        htmlFor="notes-textarea">Enter your notes</label>
      <textarea
        id="notes-textarea"
        name="notes"
        value={ textareaValue }
        onChange={ (event) => {
          setTextareaValue(event.target.value);
        } }
        placeholder="What's on your mind?"
      >
      </textarea>
      <button type="submit">
        Add Note
      </button>
    </form>
  )
}

export default AddNote
