import { useState } from "react";

const NoteTextArea =  ({ addNewNotes  }) => {
  const [inputtedText, setInputtedText] = useState('');

  return (
    <>
      <label className="text-8xl font-bela font-bold tracking-tighter mt-32 mb-12" htmlFor="note">Enter a note</label>

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
        className="bg-blue-500 hover:bg-blue-700 text-white mt-12 font-bold py-2 px-4 rounded mb-12"
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
