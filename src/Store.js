import React, { useState } from "react";

export const AppContext = React.createContext();

const Store = ({ children }) => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  return (
    <AppContext.Provider
      value={{
        numberOfQuestions,
        setNumberOfQuestions,
        questions,
        setQuestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
