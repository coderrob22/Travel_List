export default function App() {
  return(
    <div className="app">

  <Logo />
  <Form />
  <PackingList />
  <Stats />
    </div>
  )
}

function Logo() {
  return <h1>🏝️ Travel Time 🧳</h1>
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for the trip?</h3>
    </div>
  )
}

function PackingList() {
  return <div className="list">List</div>
}

function Stats() {
  return(
    <footer className="stats">
      <em> 
      💼 You have x items in your list, and you have packed x(x%)
      </em>
    </footer>
  )
}
