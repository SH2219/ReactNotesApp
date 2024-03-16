import { useEffect, useState } from "react";
import NotesList from "./Components/NotesList";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";
function App() {
  const [notes, setNotes] = useState([]);

  const newNote = (text, title) => {
    const date = new Date();
    const newNote = {
      date: date.toLocaleDateString(),
      text: text,
      title: title,
      id: nanoid(),
      isEditing: false,
    };

    const NewNotes = [...notes, newNote];
    setNotes(NewNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  const editNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isEditing: !note.isEditing } : note
    );
    setNotes(updatedNotes);
  };

  const handleCancelEdit = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isEditing: false } : note
    );
    setNotes(updatedNotes);
  };

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if(savedNotes){
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  return (
    <>
      <div className={`${darkMode && "darkMode"}`}>
        <Header handleDarkMode={setDarkMode} />
        <Search
          handleSearchNote={(value) => {
            console.log("Search Text:", value);
            setSearchText(value.toLowerCase());
          }}
        />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleNewNote={newNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
          handleCancelEdit={handleCancelEdit}
        />
      </div>
    </>
  );
}

export default App;
