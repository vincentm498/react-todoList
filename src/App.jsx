import { useState } from "react";
import { nanoid } from "nanoid";
import ListItem from "./components/ListItem";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: nanoid(8),
      content: "item 1",
    },
    {
      id: nanoid(8),
      content: "item 2",
    },
    {
      id: nanoid(8),
      content: "item 3",
    },
  ]);

  const [todo, setTodo] = useState('')
  const [showValidation, setShowValidation] = useState(false)

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (todo === '') {
      setShowValidation(true)
      return
    }
    setTodoList([...todoList, { id: nanoid(8), content: todo }]);
    setTodo('')
    setShowValidation(false)
  }

  console.log(todoList.length);

  return (
    <div className="h-screen">
      <div className="max-w-4xl px-6 pt-20 mx-auto">
        <h1 className="mb-4 text-3xl text-slate-100">La To-do liste</h1>
        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input value={todo} onChange={e => setTodo(e.target.value)} type="text" className="block w-full mt-1 rounded" />
          {showValidation && 
            <p className="text-red-400"> Ajoutez d'abord du contenu à la tâche</p>
          }
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
            Ajouter
          </button>
        </form>

        <ul>
          {todoList.length === 0 && (
            <li className="text-red-500">Pas d'items à afficher ...</li>
          )}
          {todoList.length > 0 &&
            todoList.map((item) => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
