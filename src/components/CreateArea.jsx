import { useState } from "react";

function CreateArea({showNote}) {
  let [note, setNote] = useState({
    title: '',
    content: ''
  })
  
  function addFunction(evt) {
    evt.preventDefault()
    //console.log(`titulo: ${note.title} e conteudo: ${note.content}`)
    showNote(note)
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={evt => setNote({...note,[evt.target.name]:evt.target.value})} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={evt => setNote({...note,[evt.target.name]:evt.target.value})} value={note.content}/>
        <button onClick={addFunction} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
