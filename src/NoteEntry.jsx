import { useState } from 'react';

const NoteEntry = ({ addNewNote }) => {
  const [text, setText] = useState('');

  const onAddButtonClick = () => {
    const note = {
      createdDate: new Date(),
      text: text
    };
    addNewNote(note);
    setText('');
  };

  return (
  <>
    <textarea
      id='note-entry-input'
      name='note'
      rows='1' cols='43'
      className='block w-1/3 p-6 mx-6 mb-3 text-xl border border-gray-300 rounded-lg min-h-44'
      placeholder='What is on your mind?'
      value={ text }
      onChange={(e) => setText(e.target.value)}>
    </textarea>
    <button
      type='button'
      className='text-white text-sm w-1/3 bg-gray-700 font-medium rounded-xl px-5 py-2.5 text-center mb-2'
      onClick={ onAddButtonClick }
    >
      Add Note
    </button>
  </>
  );
};

export default NoteEntry;
