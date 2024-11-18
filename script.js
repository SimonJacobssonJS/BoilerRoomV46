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

  // Function to add a note
  const addNotes = (title, note) => {
    const timestamp = new Date().toLocaleString();
    const id = generateId(); // Generate a unique id
    const newNote = { id, title, note, timestamp, completed: false }; // Add completed property
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    return newNote;
  };

  // Function to delete a note
  const deleteNote = (id) => {
    const index = notes.findIndex((note) => note.id === id); // find the note by id
    if (index !== -1) {
      notes.splice(index, 1); // removes the note from the array
      localStorage.setItem("notes", JSON.stringify(notes)); // Update localStorage
      renderNotes(); // Re-render all notes
    }
  };

  // Function to toggle completed status
  const toggleCompleted = (id) => {
    const note = notes.find((note) => note.id === id);
    if (note) {
      note.completed = !note.completed; // Toggle completed status
      localStorage.setItem("notes", JSON.stringify(notes)); // Update localStorage
      renderNotes(); // Re-render all notes
    }
  };

  // Function to render notes
  const renderNotes = () => {
    notesContainer.innerHTML = ""; // Clear the DOM
    notes.forEach((note) => createNotes(note));
  };

  // Function to create notes in the DOM
  const createNotes = ({ id, title, note, timestamp, completed }) => {
    const noteCreateDiv = document.createElement("div");
    noteCreateDiv.classList.add("note");
    noteCreateDiv.setAttribute("data-id", id); // Add id as an attribute

    // Strike-through the title and note if completed
    if (completed) {
      noteCreateDiv.classList.add("completed");
    }

    const titleH2 = document.createElement("h2");
    titleH2.innerText = title;

    const noteParagraph = document.createElement("p");
    noteParagraph.innerText = note;

    const timestampDiv = document.createElement("div");
    timestampDiv.classList.add("timestamp");
    timestampDiv.innerText = `Created: ${timestamp}`;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Ta bort";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      deleteNote(id); // Call delete function with id
    });

    const completeButton = document.createElement("button");
    completeButton.innerText = completed
      ? "Ångra markering"
      : "Markera som klar";
    completeButton.classList.add("complete-button");
    completeButton.addEventListener("click", () => {
      toggleCompleted(id); // Toggle the completed status
    });

    // Append elements to the note div
    noteCreateDiv.append(
      titleH2,
      noteParagraph,
      timestampDiv,
      completeButton,
      deleteButton
    );
    notesContainer.appendChild(noteCreateDiv);
  };

  // Render all saved notes on page load
  renderNotes();

  // Listen to the saveButton click and run function
  saveButton.addEventListener("click", () => {
    if (titleText.value.trim() === "" || noteForm.value.trim() === "") {
      alert("Båda fälten måste fyllas i!");
      return;
    }

    const newNote = addNotes(titleText.value, noteForm.value);
    renderNotes();

    // Clear the fields after note is added
    titleText.value = "";
    noteForm.value = "";
  });

  // Delete all notes
  clearButton.addEventListener("click", () => {
    notes.length = 0;
    localStorage.setItem("notes", JSON.stringify(notes)); // Update localStorage
    notesContainer.innerHTML = ""; // Clear the DOM
  });
});
