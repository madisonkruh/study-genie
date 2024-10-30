const express = require("express");
const { generateNotes } = require("./controllers/openaiController");

const app = express();
app.listen(4000, () => console.log("listening to requests on port 4000"));

app.use(express.json());

app.post("/openai/notes", generateNotes);
