import React, { useEffect, useState } from "react";

const EditNote = ({ handleCancelEdit, initialNote, handleEditNote }) => {
  const [noteText, setNoteText] = useState(initialNote.text || "");
  const CharacterLimit = 500;

  useEffect(() => setNoteText(initialNote.text || "")), [initialNote];

  const handleChange = (e) => {
    if (CharacterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleEditNote(initialNote.id, noteText);
      setNoteText("");
      handleCancelEdit(initialNote.id);
    }
  };

  const cancelHandle = () => {
    setNoteText("");
    handleCancelEdit(initialNote.id);
  };

  return (
    <div className="card new">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={initialNote.text}
        placeholder="Type to edit note"
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{CharacterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
        <button className="save" onClick={cancelHandle}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditNote;
