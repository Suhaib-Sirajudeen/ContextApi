import { createContext, useState } from "react";

export const CounterContext = createContext();
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter >= 0 && counter < 10) setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    if (counter > 0) setCounter((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
