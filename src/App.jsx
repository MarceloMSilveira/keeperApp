import './app.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import CreateArea from './components/CreateArea'
//import { useState } from 'react'
import notas from './assets/notas'
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
      {notas.map(nota => <Note key={nota.id} id={nota.id} title={nota.title} content={nota.content}/>)}
      <Footer />
    </div>
  )
}

export default App
