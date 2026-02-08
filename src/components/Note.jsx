import './note.css'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note({title, content, id, deleteFunction}) {
    
  return (
    <div id={id} className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={()=>deleteFunction(id)}>
        <DeleteIcon />
      </button>
    </div>
  )
}