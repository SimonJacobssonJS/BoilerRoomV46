//låter av hemsidan för att ladda klart så inga DOM element körs innan de ska
document.addEventListener("DOMContentLoaded", () => {
  const formForNotes = document.getElementById("formForNotes");
  const titleText = document.getElementById("titleText");
  const noteForm = document.getElementById("noteForm");
  const notesContainer = document.querySelector(".notesContainer");
  const saveButton = document.getElementById("saveButton");
  const clearButton = document.getElementById("clearButton");

  const notes = JSON.parse(localStorage.getItem(".notes")) || [];

  const addNotes = (titleText, noteForm) => {
    notes.push({
      titleText,
      noteForm,
    });
    return { titleText, noteForm };
  };

  const createNotes = ({ titleText, noteForm }) => {
    const noteCreateDiv = document.createElement("div");
    const titleH2 = document.createElement("h2");
    const noteParagraph = document.createElement("p");

    titleH2.innerText = addNotes;
    noteParagraph.innerText = addNotes;

    noteCreateDiv.append(titleH2, noteParagraph);
    notesContainer.appendChild(notesContainer);
  };
  notes.forEach(noteCreateDiv);
  noteForm.onsubmit = (e) => {
    e.preventDefault();

    const newNotes = addNotes(titleText.value, noteForm.value);
  };

  noteCreateDiv(addNotes);
  titleText.value = "";
  noteForm.value = "";

  localStorage.setItem("createNotes", JSON.stringify(notesContainer));
  return { titleText, noteForm };
});

//notesContainer.push({ createNotes });
