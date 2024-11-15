document.addEventListener("DOMContentLoaded", () => {
  const titleText = document.getElementById("titleText");
  const noteForm = document.getElementById("noteForm");
  const saveButton = document.getElementById("saveButton");

  function display() {
    localStorage.setItem("saveNote", noteForm.value, titleText.value);
    console.log(localStorage.getItem("saveNote"));

    //   h2.innerhtml = input.value;
    //   h2.innerhtml = localStorage.getItem("saveTitle");
  }

  //låter av hemsidan för att ladda klart så inga DOM element körs innan de ska
  //   const titleInput = document.getElementById("titleInput");
  //   const contentInput = document.getElementById("contentInput");
  //   const saveNote = document.querySelector("buttonSave");

  //   //   let title = titleInput.trim();
  //   //   let content = contentInput.trime(); //oavsett value (siffra eller bokstav så skalar den av överbliven whitespace)
  //   // document.addEventListener("click", saveNote);
  //   let buttonSave = document.getElementById("buttonSave");

  //   localStorage.setItem("buttonSave", input.value);
  //   h2.innerHTML = localStorage.getItem("buttonSave");
  //   console.log(buttonSave);

  //   //   {
  //   //     if (!title || !content = null){
  //   //     alert("Du måste fylla i både titel och anteckningar för att fortsätta");}
  //   //     else{
  //   //         return;
  //   //     };

  //   //   });
});
