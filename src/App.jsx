import './app.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import CreateArea from './components/CreateArea'
import { useState } from 'react'
import notas from './assets/notas'
function App() {

  let [notes, setNotes] = useState (notas)
  
  function addNote(novaNota) {
    console.log(novaNota.title)
    console.log(novaNota.content)
    setNotes([...notes,novaNota])
  }

  function delNote(noteId) {
    console.log(`Id da nota: ${noteId}`)
    setNotes(notes.filter((nota, index)=> index != noteId))  
  }


  return (
    <div>
      <Header />
      <CreateArea sendNoteToApp={addNote}/>
      {notes.map((nota,index) => <Note key={index} id={index} title={nota.title} content={nota.content} deleteFunction={delNote} />)}
      <Footer />
    </div>
  )
}

export default App
