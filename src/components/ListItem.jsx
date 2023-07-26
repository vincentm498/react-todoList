export default function ListItem({itemData, deleteTodo}) {
  return (
    <li className="flex p-2 mb-2 rounded bg-zinc-200">
          <span>{itemData.content}</span>
          <button onClick={() => deleteTodo(itemData.id)} className="w-6 h-6 ml-auto bg-red-600 rounded text-zinc-200">X</button>
    </li>
  )
}
