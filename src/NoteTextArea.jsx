import { useState } from "react";

const NoteTextArea =  ({ addNewNotes  }) => {
  const [inputtedText, setInputtedText] = useState('');

  return (
    <>
      <label htmlFor="note">Enter a note</label>

      <textarea
        id="note"
        name="note"
        rows="5" cols="33"
        value={ inputtedText }
        onChange={ (e) => {
          setInputtedText(e.target.value);
        }}
        >
      </textarea>

      <button
        type="button"
        onClick={ () => {
          addNewNotes(inputtedText);
          setInputtedText('');
        }}
        >
        Add Note
      </button>
  </>
  );
};

export default NoteTextArea;
