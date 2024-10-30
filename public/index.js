const notesForm = document.querySelector(".notes-form");
const notesContainer = document.querySelector(".notes");

notesForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  notesContainer.style.display = "block";
  notesContainer.innerHTML = "Loading...";

  const res = await fetch("/openai/notes", {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic: notesForm.topic.value }),
    method: "POST",
  });

  const data = await res.json();

  notesContainer.innerHTML = marked(data.notes.content);
});
