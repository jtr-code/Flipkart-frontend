import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [name, setName] = useState("");
  return (
    <DataContext.Provider value={{ name, setName }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
