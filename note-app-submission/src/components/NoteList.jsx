import React from 'react'
import NoteItem from './NoteItem'

function NoteList({notes, onArchiveHandler, onDelete, search}) {
  const activeNotes = notes.filter(note => !note.archived && note.title.toLowerCase().match(search.toLowerCase()));

  const archivedNotes = notes.filter(note => note.archived && note.title.toLowerCase().match(search.toLowerCase()));
  return (
    <div className='note-list'>
      <div className="active-notes">
        <h2>Your Notes</h2>
        
        <div className='notes-container'>
          {activeNotes.length !==  0 ? activeNotes.map(note => (
            <NoteItem 
              note={note} 
              key={note.id} 
              onArchiveHandler={onArchiveHandler}
              onDelete={onDelete} 
            />
          )) : <p>Tidak ada data</p>}
        </div>
      </div>
      <div className="archived-notes">
        <h2>Archived Notes</h2>
        
        <div className='notes-container'>
          {archivedNotes.length !== 0 ? archivedNotes.map(note => (
              <NoteItem 
                note={note} 
                key={note.id} 
                onArchiveHandler={onArchiveHandler}
                onDelete={onDelete} 
              />
          )) : <p>Tidak ada data</p>}
        </div>
      </div>
    </div>
  )
}

export default NoteList