import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem('site_content');
    return saved ? JSON.parse(saved) : {
      homeHeroTitle: 'Entertainment That Moves With You.',
      homeHeroSubtitle: 'Experience drama like never before, right on your mobile device.',
      // Add more editable fields here as needed
    };
  });

  useEffect(() => {
    localStorage.setItem('site_content', JSON.stringify(content));
  }, [content]);

  const updateContent = (key, value) => {
    setContent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
