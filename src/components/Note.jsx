import './note.css'

export default function Note({id,title, content}) {
    
  return (
    <div id={id} className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button>DELETE</button>
    </div>
  )
}