import { useState } from 'react'
import { Item } from './Item';
import Card from './components/Card';

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const [list, setList] = useState<Item[]>([]);

  function handleAddItem(_ : any) {
    const newItem = { title, text, id };
    setList((list) => [...list, newItem]);
    setId(id + 1);
  }

  function hadleRemoveItem(id: number) {
    setList(list => list.filter(item => item.id !== id));
  }

  return(
    <div>
      <h1>To Do List</h1>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
      <button onClick={handleAddItem}>ADD</button>
      <br/>
      {list.map(item => {
        return  <Card item={item} func={hadleRemoveItem}/>;
      })}
    </div>
  )
}

export default App
