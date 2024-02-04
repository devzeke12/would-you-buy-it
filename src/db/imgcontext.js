import { createContext } from 'react'
import { useState } from 'react';

export const ImgContext = createContext();

export const ImgContextProvider = (props) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState('')
    const [showImage, setShowImage] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setShowImage(false)
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setTitle(value);
  };




  const handleUpload = () => {
    setShowImage(true)
  }

    const contextValue = {handleFileChange, selectedFile, handleUpload, showImage, title, handleInput, setTitle, setSelectedFile}

    return (
        <ImgContext.Provider value={contextValue}>
            {props.children}
        </ImgContext.Provider>
      )
}