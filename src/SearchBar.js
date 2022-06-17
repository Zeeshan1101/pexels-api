import React, { useState } from 'react';

const SearchBar = ({ keyword, setKeyword, onClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-4/12 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl transition-all ${
        open ? 'top-2 -translate-y-0' : ''
      }`}>
      <input
        className='w-full border-2 rounded-3xl px-4  py-2 font-sans font-light text-xl shadow-md focus:shadow-2xl focus-visible:outline-0 transition-all ease-linear'
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}></input>
      <button
        className='absolute -right-[-20px] top-1/2 -translate-y-1/2'
        onClick={() => {
          setOpen(true);
          onClick();
        }}>
        <span class='material-symbols-outlined'>search</span>
      </button>
    </div>
  );
};

export default SearchBar;
