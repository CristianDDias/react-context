import React from "react";

type Reducer<S, A> = (state: S, action: A) => S;

type Dispatch<A> = (value: A) => void;

export default function makeStore<S, A>(reducer: Reducer<S, A>, initialState: S) {
  const storeContext = React.createContext<S>(initialState);
  const dispatchContext = React.createContext<Dispatch<A>>(() => {});

  const StoreProvider: React.FC = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState);

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  function useStore() {
    return React.useContext(storeContext);
  }

  function useDispatch() {
    return React.useContext(dispatchContext);
  }

  return { StoreProvider, useStore, useDispatch };
}
