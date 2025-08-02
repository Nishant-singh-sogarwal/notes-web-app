function addNote() {
  const noteInput = document.getElementById('note-input');
  const noteText = noteInput.value.trim();

  if (noteText !== '') {
    const noteList = document.getElementById('notes-list');
    const newNote = document.createElement('li');
    newNote.textContent = noteText;
    noteList.appendChild(newNote);

    noteInput.value = '';
    saveNotes();
  }
}

function saveNotes() {
  const notes = [];
  const items = document.querySelectorAll('#notes-list li');
  items.forEach(item => notes.push(item.textContent));
  localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  const noteList = document.getElementById('notes-list');
  notes.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    noteList.appendChild(li);
  });
}

window.onload = loadNotes;
