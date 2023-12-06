import React, { useState } from 'react';
import './index.css';
import SearchBar from './SearchBar';
import axios from 'axios';
import { motion } from 'framer-motion';
const App = () => {
  const [keyword, setKeyword] = useState('');
  const [photo, setPhoto] = useState([]);
  const onClick = async () => {
    const list = await axios.get(
      `https://api.pexels.com/v1/search?query=${keyword}&per_page=15`,
      {
        headers: {
          Authorization: process.env.PEXELS_KEY,
        },
      }
    );
    setPhoto(list.data.photos);
  };
  console.log(photo);
  return (
    <div>
      <SearchBar keyword={keyword} setKeyword={setKeyword} onClick={onClick} />
      <div className='masonry mt-20 mb-10 mx-14 sm:masonry-sm md:masonry-md'>
        {photo.map((ph) => {
          return (
            <motion.div
              className='h-9/12 relative break-inside mb-5 transition-all'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                msTransformOrigin: 'bottom',
                transitionDelay: '5s',
              }}>
              <img className='w-100 h-100  ' src={ph.src.original} alt='' />
              <img
                className='w-100 h-100 blur-lg absolute top-0 -z-10'
                src={ph.src.original}
                alt=''
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
