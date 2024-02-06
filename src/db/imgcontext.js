import { createContext } from 'react'
import { useState } from 'react';

export const ImgContext = createContext();

export const ImgContextProvider = (props) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState('')
    const [showImage, setShowImage] = useState(false);
    const [error, setError] = useState('')

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setShowImage(false)
  };

  const handleInput = (e) => {
    const value = e.target.value;
    if (value.length <= 80) {
      setTitle(value);
      setError('');
    } else {
      setError('Maximum length should be 80 characters.');
    }
  };

  const handleBlur = () => {
    if (title.length < 12) {
      setError('Minimum length should be 12 characters.');
    } else {
      setError('');
    }
  };




  const handleUpload = () => {
    setShowImage(true)
  }

    const contextValue = {handleFileChange, selectedFile, handleUpload, showImage, title, handleInput, setTitle, setSelectedFile, error, handleBlur}

    return (
        <ImgContext.Provider value={contextValue}>
            {props.children}
        </ImgContext.Provider>
      )
}