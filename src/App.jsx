import './app.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import CreateArea from './components/CreateArea'
//import { useState } from 'react'

function App() {

  // let [notes, setNotes] = useState ([])
  
  // function addNoteToList(title, content) {
    
  // }

  function mostrarNota(nota) {
    console.log(nota.title)
    console.log(nota.content)
  }


  return (
    <div>
      <Header />
      <CreateArea showNote={mostrarNota}/>
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  )
}

export default App
