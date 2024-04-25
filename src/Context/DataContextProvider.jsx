import DataContext from "./dataContext";

// eslint-disable-next-line react/prop-types, no-unused-vars
function DataContextProvider({ children }) {
  return <DataContext.Provider>{children}</DataContext.Provider>;
}

export default DataContextProvider;
