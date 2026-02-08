import { useState } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Fab from '@mui/material/Fab';

function CreateArea({sendNoteToApp}) {
  let [note, setNote] = useState({
    title: '',
    content: ''
  })
  
  function addFunction(evt) {
    evt.preventDefault()
    sendNoteToApp(note)
    setNote({
      title: '',
      content: ''
    })
  }

  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" onChange={evt => setNote({...note,[evt.target.name]:evt.target.value})} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={evt => setNote({...note,[evt.target.name]:evt.target.value})} value={note.content}/>
        <Fab onClick={addFunction}> 
          <AddTaskIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
