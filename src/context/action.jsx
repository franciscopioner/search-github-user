import React, { createContext, useState, useContext } from 'react';

export const ActionContext = createContext();

export default function ActionsProvider({ children }) {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <ActionContext.Provider
      value={{
        count,
        setCount,
        total,
        setTotal,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
}

export function useAction() {
  const context = useContext(ActionContext);

  const { count, setCount } = context;
  const { total, setTotal } = context;

  return { count, setCount, total, setTotal };
}
