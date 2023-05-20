import React from 'react'

function NoteItem({note, onArchiveHandler, onDelete}) {
  const {id, title, body, createdAt, archived} = note;
    
  return (
    <div className='note-item'>
        <div className='content-container'>
          <h4>{title}</h4>
          <span className='date'>{createdAt}</span>
          <p>{body}</p>
        </div>
        <div className='button-container'>
          <button className='arsip-button' onClick={() => onArchiveHandler(id, title, body, createdAt, !archived ? true : false)}>{archived ? 'Active' : 'Archive'}</button>
          <button className='delete-button' onClick={() => onDelete(id)}>Delete</button>
        </div>
    </div>
  )
}

export default NoteItem