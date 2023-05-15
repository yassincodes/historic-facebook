import React, { useState, useContext } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  
  return (
    <Context.Provider
      value={{
        checkbox1,
        setCheckbox1,
        checkbox2,
        setCheckbox2,
        selectedCheckbox,
        setSelectedCheckbox,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
