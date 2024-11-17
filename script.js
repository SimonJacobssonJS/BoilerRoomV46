document.addEventListener("DOMContentLoaded", () => {
  const formForNotes = document.getElementById("formForNotes");
  const titleText = document.getElementById("titleText");
  const noteForm = document.getElementById("noteForm");
  const notesContainer = document.querySelector(".notesContainer");
  const saveButton = document.getElementById("saveButton");
  const clearButton = document.getElementById("clearButton");

  // Ladda tidigare anteckningar från localStorage
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  // Funktion för att lägga till en anteckning till listan
  const addNotes = (title, note) => {
    const timestamp = new Date().toLocaleString();
    const newNote = { title, note, timestamp };
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    return newNote;
  };

  // Funktion för att skapa en anteckning i DOM
  const createNotes = ({ title, note, timestamp }) => {
    const noteCreateDiv = document.createElement("div");
    noteCreateDiv.classList.add("note");

    const titleH2 = document.createElement("h2");
    titleH2.innerText = title;

    const noteParagraph = document.createElement("p");
    noteParagraph.innerText = note;

    const timestampDiv = document.createElement("div");
    timestampDiv.classList.add("timestamp");
    timestampDiv.innerText = `Created on: ${timestamp}`;

    noteCreateDiv.append(titleH2, noteParagraph, timestampDiv);
    notesContainer.appendChild(noteCreateDiv);
  };

  // Rendera alla sparade anteckningar vid start
  notes.forEach(createNotes);

  //Adds new note with html button, doesn't let user type nothing
  saveButton.addEventListener("click", () => {
    if (titleText.value.trim() === "" || noteForm.value.trim() === "") {
      alert("Båda fälten måste fyllas i!");
      return;
    }

    const newNote = addNotes(titleText.value, noteForm.value);
    createNotes(newNote);

    // Töm fälten efter sparande
    titleText.value = "";
    noteForm.value = "";
  });

  // Rensa alla anteckningar
  clearButton.addEventListener("click", () => {
    notes.length = 0; // Töm arrayen
    localStorage.setItem("notes", JSON.stringify(notes)); // Uppdatera localStorage
    notesContainer.innerHTML = ""; // Töm DOM
  });
});
