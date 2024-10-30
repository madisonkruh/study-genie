const readline = require("readline");
const { generateNotes } = require("./controllers/openaiController");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Study Note Topic: \n", (topic) => generateNotes(topic));
