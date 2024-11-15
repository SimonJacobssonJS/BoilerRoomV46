document.addEventListener("DOMContentLoaded", () => {
  //låter av hemsidan för att ladda klart så inga DOM element körs innan de ska
  const titleInput = document.getElementById("titleInput");
  const contentInput = document.getElementById("contentInput");
  const noteSave = document.querySelector("saveNote");


  const title = titleInput.value.trim();
  const content = content.value.trime(); //oavsett value (siffra eller bokstav så skalar den av överbliven whitespace)


  saveNote.addEventListener("submit", (click) => {  
    if (title || content = null){
    alert("Du måste fylla i både titel och anteckningar för att fortsätta");}
    else{
        return;
    };
    
  });
});
