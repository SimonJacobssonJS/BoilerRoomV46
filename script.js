document.addEventListener("DOMContentLoaded", () => {
  const formForNotes = document.getElementById("formForNotes");
  const titleText = document.getElementById("titleText");
  const noteForm = document.getElementById("noteForm");
  const notesContainer = document.querySelector(".notesContainer");
  const saveButton = document.getElementById("saveButton");
  const clearButton = document.getElementById("clearButton");

  // Loads saved notes from previous localStorage
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  // creates random unik id
  const generateId = () => {
    return "_" + Math.random().toString(36).slice(2, 11);
  };

  // Funktion för att lägga till en anteckning till listan
  const addNotes = (title, note) => {
    const timestamp = new Date().toLocaleString();
    const id = generateId(); // Generera ett unikt id
    const newNote = { id, title, note, timestamp };
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    return newNote;
  };

  // Function to delete notes
  const deleteNote = (id) => {
    const index = notes.findIndex((note) => note.id === id); // find the note with idex id
    if (index !== -1) {
      notes.splice(index, 1); // removes note from the array
      localStorage.setItem("notes", JSON.stringify(notes)); // Uppdatera localStorage
      renderNotes(); // Rendera om alla anteckningar
    }
  };

  // Function to render notes
  const renderNotes = () => {
    notesContainer.innerHTML = ""; // Töm DOM
    notes.forEach((note) => createNotes(note));
  };

  // function creates notes into DOM
  const createNotes = ({ id, title, note, timestamp }) => {
    const noteCreateDiv = document.createElement("div");
    noteCreateDiv.classList.add("note");
    noteCreateDiv.setAttribute("data-id", id); // makes noteCreateDiv an attribbute with id

    const titleH2 = document.createElement("h2");
    titleH2.innerText = title;

    const noteParagraph = document.createElement("p");
    noteParagraph.innerText = note;

    const timestampDiv = document.createElement("div");
    timestampDiv.classList.add("timestamp");
    timestampDiv.innerText = `skapad: ${timestamp}`;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Ta bort";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      deleteNote(id); // calls delete function with id
    });

    noteCreateDiv.append(titleH2, noteParagraph, timestampDiv, deleteButton);
    notesContainer.appendChild(noteCreateDiv);

    console.log(`ID: ${id}`);
  };

  // Rendera alla sparade anteckningar vid start
  renderNotes();

  // listens to the saveButton click and runs function
  saveButton.addEventListener("click", () => {
    if (titleText.value.trim() === "" || noteForm.value.trim() === "") {
      alert("Båda fälten måste fyllas i!");
      return;
    }

    const newNote = addNotes(titleText.value, noteForm.value);
    renderNotes();

    //clears the field when note is added
    titleText.value = "";
    noteForm.value = "";
  });

  // Deletes all notes
  clearButton.addEventListener("click", () => {
    notes.length = 0;
    localStorage.setItem("notes", JSON.stringify(notes)); // Uppdates localStorage
    notesContainer.innerHTML = ""; // clears DOM
  });
});
