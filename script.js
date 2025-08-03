let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2000);
}

function addNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();
  if (noteText === "") return;

  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
  showToast("Note deleted");
}

function renderNotes() {
  const notesContainer = document.getElementById("notesContainer");
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";

    const actions = document.createElement("div");
    actions.className = "actions";

    const delIcon = document.createElement("i");
    delIcon.className = "fas fa-trash";
    delIcon.onclick = () => deleteNote(index);

    actions.appendChild(delIcon);

    const noteContent = document.createElement("div");
    noteContent.innerText = note;

    noteCard.appendChild(actions);
    noteCard.appendChild(noteContent);
    notesContainer.appendChild(noteCard);
  });
}

renderNotes();
