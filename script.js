let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  const container = document.getElementById("notesContainer");
  if (!container) return;
  container.innerHTML = "";
  notes.forEach((note, idx) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    const p = document.createElement("p");
    p.innerText = note;
    noteDiv.appendChild(p);

    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.onclick = () => {
      notes.splice(idx, 1);
      saveNotes();
      renderNotes();
    };
    noteDiv.appendChild(btn);

    container.appendChild(noteDiv);
  });
}

function addNote() {
  const input = document.getElementById("noteInput");
  const text = input?.value.trim();
  if (!text) return;
  notes.push(text);
  saveNotes();
  renderNotes();
  input.value = "";
}

renderNotes();
