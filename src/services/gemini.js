// ===== Gemini API Service =====
// Uses the Google Gemini 1.5 Flash model (free tier)
// Get your API key from: https://aistudio.google.com/app/apikey

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || process.env.REACT_APP_GEMINI_API_KEY;
const MODEL_NAME = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.5-flash';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

const SYSTEM_PROMPT = `
You are the official AI assistant for ChaiShots app.

Your job is ONLY to answer questions related to:
- ChaiShots features
- account help
- subscription
- content recommendations
- app navigation
- troubleshooting
- policies
- creator information inside ChaiShots

STRICT RULES:
- Do NOT answer general knowledge questions.
- Do NOT answer unrelated topics.
- Do NOT answer geography, politics, coding, education, medical, or random factual questions.
- If the question is unrelated, reply exactly:
"Sorry, I can only help with ChaiShots-related questions."

Examples:
User: What is the capital of AP?
Assistant: Sorry, I can only help with ChaiShots-related questions.

User: How to reset my ChaiShots password?
Assistant: [Helpful answer]
`;

/**
 * Send a message to Gemini and get a response.
 * @param {Array} conversationHistory - Array of { role, content } objects
 * @returns {Promise<string>} - AI response text
 */
export async function sendMessage(conversationHistory) {
  if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
    throw new Error(
      'API key not configured. Please add your Gemini API key to the .env file.\n' +
      'Get a free key at: https://aistudio.google.com/app/apikey'
    );
  }

  // Convert conversation history to Gemini format and validate for text-only
  const contents = conversationHistory.map((msg) => {
    // Backend validation to reject non-string content (media/files)
    if (typeof msg.content !== 'string') {
      throw new Error("Only plain text input is supported.");
    }
    return {
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    };
  });

  const body = {
    systemInstruction: {
      parts: [
        { text: SYSTEM_PROMPT }
      ]
    },
    contents,
    generationConfig: {
      temperature: 0.1, // Very low temperature for high rule compliance and faster responses
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 500, // Reduced max output tokens to speed up generation time
    },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ],
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    const message = error?.error?.message || `HTTP ${response.status}`;
    throw new Error(`Gemini API Error: ${message}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error('No response from Gemini. The content may have been blocked by safety filters.');
  }

  return text;
}


