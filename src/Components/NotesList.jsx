import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";
import EditNote from "./EditNote";

const NotesList = ({
  notes,
  handleNewNote,
  handleDeleteNote,
  handleEditNote,
  handleCancelEdit,
}) => {
  return (
    <>
      <div className="container mt-5">
       
        <div className="row">
          {notes.map((note) =>
            note.isEditing ? (
              <EditNote
                key={note.id}
                text={note.text}
                title={note.title}
                initialNote={note}
                handleCancelEdit={handleCancelEdit}
                handleEditNote={handleEditNote}
              />
            ) : (
              <Note
                key={note.id}
                note={note}
                id={note.id}
                text={note.text}
                title={note.title}
                date={note.date}
                handleDeleteNote={handleDeleteNote}
                handleEditNote={handleEditNote}
              />
            )
          )}
          <NewNote handleNewNote={handleNewNote} />
        </div>
      </div>
    </>
  );
};

export default NotesList;
