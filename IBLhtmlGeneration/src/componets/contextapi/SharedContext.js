// context/SharedContext.js
import { createContext } from 'react';
import React, { useState } from 'react';
// import { SharedContext } from './SharedContext';

export const SharedContext = createContext();


export const SharedProvider = ({ children }) => {
  const [templateVariables, setTemplateVariables] = useState("Whatever variables are dynamic in the HTML, you'll see them here.");
  const [HTMLData, setHtmlData] = useState("");
    const [DownloadAccess,setDownloadAccess]= useState(false);
    const [CSVFileAccess,setCSVFileAccess] = useState(false);

  return (
    <SharedContext.Provider value={{
      templateVariables, setTemplateVariables,
      HTMLData, setHtmlData,
      DownloadAccess,setDownloadAccess,
      CSVFileAccess,setCSVFileAccess
    }}>
      {children}
    </SharedContext.Provider>
  );
};
