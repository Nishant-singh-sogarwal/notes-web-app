const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notes-container");

addBtn.addEventListener("click", () => {
  const noteText = document.getElementById("noteInput").value.trim();
  if (noteText === "") return;

  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");

  const notePara = document.createElement("p");
  notePara.innerText = noteText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.onclick = () => {
    notesContainer.removeChild(noteDiv);
  };

  noteDiv.appendChild(notePara);
  noteDiv.appendChild(deleteBtn);
  notesContainer.appendChild(noteDiv);

  document.getElementById("noteInput").value = "";
});
