import './note.css'

export default function Note({title, content, id, deleteFunction}) {
    
  return (
    <div id={id} className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={()=>deleteFunction(id)}>DELETE</button>
    </div>
  )
}