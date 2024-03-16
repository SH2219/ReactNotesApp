import React, { useState } from "react";
import "./index.css";
const NewNote = ({ handleNewNote}) => {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const CharacterLimit = 500;

  const handleChange = (e) => {
    if (CharacterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    
    }
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleNewNote(noteText, title);
      setNoteText("");
      setTitle("");
    }
  };

  return (
    <div className="card new">
      <input className="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleChangeTitle}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={noteText}
        placeholder="Type to add a note"
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{CharacterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewNote;
