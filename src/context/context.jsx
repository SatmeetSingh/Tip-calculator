import { createContext, useContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [person, setPerson] = useState(1);
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);

  const Tip = (tip * bill) / 100 / person;

  const Total = bill / person + Tip;

  return (
    <CalculatorContext.Provider
      value={{ person, tip, bill, setBill, setPerson, setTip, Tip, Total }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  return useContext(CalculatorContext);
};
