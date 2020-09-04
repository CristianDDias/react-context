import makeStore from "../makeStore";

export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

export type TodosState = Todo[];

export type TodosAction =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: string }
  | { type: "TOGGLE"; id: string };

const initialState: TodosState = [];

const reducer = (state: TodosState, action: TodosAction): TodosState => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now().toString(), text: action.text, isDone: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) => todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo);
    default:
      throw new Error(`Unknown action: ${action}.`);
  }
};

export const {
  StoreProvider: TodosProvider,
  useStore: useTodos,
  useDispatch: useTodosDispatch,
} = makeStore<TodosState, TodosAction>(reducer, initialState);
