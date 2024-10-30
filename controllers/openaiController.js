const openai = require("../config/openaiConfig");

const generateNotes = async (req, res) => {
  const { topic } = req.body;

  const notes = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Provide study notes explaining the following topic: ${topic}. Include only the study notes in your response.`,
      },
    ],
    model: "gpt-4o-mini",
  });

  res.status(200).json({
    notes: notes.choices[0].message,
  });
};

module.exports = { generateNotes };
