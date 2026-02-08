import './note.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

export default function Note({title, content, id, deleteFunction}) {
    
  return (
    <div id={id} className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <Zoom in={true}>
        <Fab onClick={()=>deleteFunction(id)}>
          <DeleteIcon />
        </Fab>
      </Zoom>
    </div>
  )
}