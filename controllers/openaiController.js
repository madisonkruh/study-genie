const openai = require("../config/openaiConfig");

const generateNotes = async (topic) => {
  const notes = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Provide study notes explaining the following topic: ${topic}. Include only the study notes in your response.`,
      },
    ],
    model: "gpt-4o-mini",
  });

  console.log(notes.choices[0].message);
};

module.exports = { generateNotes };
