import { useState } from 'react'
import { Item } from './Item';
import Card from './components/Card';

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [list, setList] = useState<Item[]>([]);
  let id = 0;

  function handleAddItem(_ : any) {
    const newItem = { title, text, id };
    setList((list) => [...list, newItem]);
    id++;
  }

  return(
    <div>
      <h1>To Do List</h1>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
      <button onClick={handleAddItem}>ADD</button>
      <br/>
      {list.map(item => {
        return  <Card {...item}/>;
      })}
    </div>
  )
}

export default App
