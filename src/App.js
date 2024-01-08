import { useState } from "react";
import Stats  from "./components/Stats";
import PackingList  from "./components/PackingList";
import Logo from "./components/Logo";
import Form from "./components/Form";

export default function App() {
  const [items, setItems] = useState([])
  
  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? 
      {...item, packed: !item.packed} :
       item
       )
      );
  }

  function handleClearList(){
    const confirm = window.confirm('Are you sure you want to clear the list?')
    if (confirm) setItems([])
  }

  return(
    <div className="app">

  <Logo />
  <Form onAddItems={handleAddItems}/>
  <PackingList 
    items={items} 
    onDeleteItem={handleDeleteItem} 
    onClearItems={handleClearList}
    onToggleItem={handleToggleItem}/>
  <Stats items={items} />
    </div>
  )
}


