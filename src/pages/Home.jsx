import React, { useContext, useEffect, useState } from 'react';
import { ImgContext } from '../db/imgcontext';
import { useNavigate } from 'react-router-dom';
import preview from '../assets/Row 1/Gig 1/build-shopify-store-redesign-shopify-dropshipping-store-shopify-website.png'
import About from './About';

const Home = () => {
  const { handleFileChange, handleUpload, title, handleInput, selectedFile, setTitle, setSelectedFile } = useContext(ImgContext);
  const navigate = useNavigate();
  const [fileSelected, setFileSelected] = useState(false);
  const defaultTitle = 'I will';
  const yourGigImage = selectedFile ? URL.createObjectURL(selectedFile) : null;

  const handleFileSelection = (e) => {
    handleFileChange(e);
    setFileSelected(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (fileSelected && title ) {
      handleUpload();
      navigate('/result');
    } else {
      console.log('Please choose a file (required).');
    }
  };

  useEffect(() => {
    setTitle('')
    setSelectedFile(null)
}, [])

  return (
<div className='px-[100px]'>
    <form onSubmit={handleFormSubmit}>
      <div className='flex flex-col justify-between items-center gap-5 text-center mt-10'>
        <div>
          <h1 className='text-black text-5xl font-bold'>Would You Buy it</h1>
          <h1 className='font-light text-gray-500 py-5'>Choose a title and Image to see what it will look like on Fiverr.</h1>
        </div>
        <div className='flex flex-row relative w-2/3 h-[300px]'>
          <div style={{  }} className=' w-1/2 flex flex-col justify-center items-center relative border border-1 border-dotted border-green-500 text-center bg-cover'>
          {selectedFile ? <div className='absolute w-full h-full'>
            <img src={URL.createObjectURL(selectedFile)} alt=' ' className='w-full h-full bg-cover' />
            </div> :  <p>Upload Your Image Here</p>}
            <div className='z-10'>
        <label className="cursor-pointer text-white bg-green-500 w-fit py-2 px-4 rounded text-center">
          {selectedFile ? 'File selected' : 'Choose a file'}
          <input
            type="file"
            className="hidden"
            accept="image/png, image/jpeg"
            onChange={handleFileSelection}
            required
            />
        </label>
            </div>
            </div>
        <div className='w-1/2 text-left px-[20px] flex flex-col gap-5'>
          <h1>Title</h1>
        <div className='flex border px-5'>
          <input
            type='text'
            value={defaultTitle}
            placeholder={defaultTitle}
            readOnly
            className=' focus:outline-none w-10'
          />
          <input
            type='text'
            value={title}
            onChange={handleInput}
            placeholder="do something i'm really good at"
            className=' focus:outline-none w-full'
          />
        </div>
        <div>
          <button type="submit" className='bg-green-500 px-5 py-2'>Preview</button>
        </div>
        </div>

        </div>
      </div>
    </form>
    <About />
</div>
  );
};

export default Home;
