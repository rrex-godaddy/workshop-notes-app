
function App() {

  let inputtedText = '';
  let notes = [];

  return (
    <>
      <label htmlFor="note">Enter a note</label>

      <textarea
        id="note"
        name="note"
        rows="5" cols="33"
        onChange={ (e) => {
          inputtedText = e.target.value;
          console.log('[DEBUG] inputtedText = ', inputtedText);
        }}
        >
      </textarea>

      <button
        type="button"
        onClick={ () => {
          notes.push(inputtedText);
          console.log('[DBEUG] notes array = ', notes);
        }}
        >
        Add Note
      </button>
    </>
  );
}

export default App;
