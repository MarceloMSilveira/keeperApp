import { useState, useRef, useEffect } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea({sendNoteToApp}) {
  let [note, setNote] = useState({
    title: '',
    content: ''
  })
  let [situacaoEspera, setSituacaoEspera] = useState(true)
  const titleRef = useRef(null);
  
  function addFunction(evt) {
    evt.preventDefault()
    sendNoteToApp(note)
    setNote({
      title: '',
      content: ''
    })
    setSituacaoEspera(true)
  }

  useEffect(() => {
    if (!situacaoEspera) {
      titleRef.current?.focus();
    }
  }, [situacaoEspera]);


  return (
    <div>
      <form className="create-note">
        <input
          ref={titleRef}
          hidden={situacaoEspera}
          name="title" 
          placeholder="Title" 
          onChange={evt => setNote({...note,[evt.target.name]:evt.target.value})} 
          value={note.title}
        />
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows={situacaoEspera ? "1" : "3" }
          onChange={evt => {
            setSituacaoEspera(false)
            setNote({...note,[evt.target.name]:evt.target.value})}} 
          value={note.content}
          onClick={()=>setSituacaoEspera(false)}
        />
        <Zoom in={!situacaoEspera}>
          <Fab onClick={addFunction}> 
            <AddTaskIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
