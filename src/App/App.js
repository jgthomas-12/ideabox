import "./App.css";
import Form from "../Forms/Form";
import Ideas from "../Ideas/Ideas";
import { useState } from "react";

function App() {
  // logic and functions go here
  const dummyIdeas = [
    { id: 1, title: 'Prank Trav', description: 'Duct tape him to bed' },
    { id: 2, title: 'Call John Cena', description: "You can't call what refuses to be seen" },
    { id: 3, title: 'Karate', description: 'Keeeeiaaaiiii!' },
  ]
  const [ideas, setIdeas] = useState(dummyIdeas);

  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }

  function deleteIdea (id) {
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return (
    // JSX code goes
    <main className="App">
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App;