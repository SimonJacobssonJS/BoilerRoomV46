//låter av hemsidan för att ladda klart så inga DOM element körs innan de ska
document.addEventListener("DOMContentLoaded", () => {
  const formForNotes = document.getElementById("formForNotes");
  const titleText = document.getElementById("titleText");
  const noteForm = document.getElementById("noteForm");
  const notesContainer = document.querySelector(".notesContainer");
  const saveButton = document.getElementById("saveButton");
  const clearButton = document.getElementById("clearButton");

  //const notes = JSON.parse(localStorage.getItem(".notes")) || [];

  const addNotes = (titleText, noteForm) => {};

  const createNotes = ({ title, noteForm }) => {
    const noteCreateDiv = document.createElement("div");
    const titleh2 = document.createElement("h2");
    const noteParagraph = document.createElement("p");

    createNotes.innerText = addNotes;

    noteCreateDiv.append(titleh2, noteParagraph);
    notesContainer.appendChild(notesContainer);

    const notes = [];
    notes.forEach(noteCreateDiv);
    noteForm.onsubmit = (e) => {
      e.preventDefault();
    };
  };
  //notesContainer.push({ createNotes });

  localStorage.setItem("createNotes", JSON.stringify(notesContainer));
  return { titleText, noteForm };
});
