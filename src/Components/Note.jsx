import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
const Note = ({ id, text, title, date, handleDeleteNote, handleEditNote }) => {
  return (
    <>
      <div className="note col-md-6 col-lg-4">
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              <h3>{title}</h3>
              <span>{text}</span>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <small>{date}</small>
              <FontAwesomeIcon
                className="icon"
                onClick={() => handleDeleteNote(id)}
                icon={faTrash}
              />
              <FontAwesomeIcon
                onClick={() => handleEditNote(id)}
                icon={faPenToSquare}
                className="edit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
