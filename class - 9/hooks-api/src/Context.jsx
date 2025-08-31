import React, { createContext } from "react";
import Page1 from "./Pages/Page1";

export const GlobalContext1 = createContext();

const Context = () => {
  let name = "Vijay";
  return (
    <GlobalContext1.Provider
      value={{
        name,
      }}
    >
      Context
      <Page1 name={name} />
    </GlobalContext1.Provider>
  );
};

export default Context;
