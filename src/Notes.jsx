
const Notes = ({ notes }) => {

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  return (
    notes?.map((note) =>  {
      return <li
        className='relative flex flex-col w-1/3 mt-6 text-gray-700 rounded-lg shadow-md bg-red min-h-44 bg-clip-border bg-[#f4d616]'
        key={ JSON.stringify(note.createdDate) }>
          <span className='mt-4 mr-6 text-sm text-right'> { note.createdDate.toLocaleDateString("en-US", options) } </span>
          <div className='p-6 text-lg'> { note.text } </div>
      </li>;
    })
  );
};

export default Notes;
