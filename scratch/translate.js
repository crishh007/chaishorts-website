import fs from 'fs';
import path from 'path';

// Custom .env parser to get VITE_GEMINI_API_KEY
const envPath = path.resolve('.env');
let API_KEY = '';
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const match = envContent.match(/VITE_GEMINI_API_KEY\s*=\s*([^\r\n]+)/);
  if (match) {
    API_KEY = match[1].trim();
  }
}

if (!API_KEY) {
  console.error("Error: VITE_GEMINI_API_KEY not found in .env");
  process.exit(1);
}

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;

const TARGET_LANGS = [
  { code: 'hi', name: 'Hindi' },
  { code: 'te', name: 'Telugu' },
  { code: 'ta', name: 'Tamil' },
  { code: 'kn', name: 'Kannada' },
  { code: 'ml', name: 'Malayalam' }
];

const FILES = [
  'careers.json',
  'accountDeletion.json',
  'privacyPolicy.json',
  'termsConditions.json'
];

async function translateText(jsonString, langName) {
  const systemPrompt = `You are a professional website and legal/policy translator. Translate the values of this English localization JSON object to ${langName}. 
STRICT RULES:
1. Keep the JSON keys exactly the same. Only translate the values.
2. Translate values accurately, professionally, and naturally into ${langName}. Maintain the tone of the original legal/policy/career text.
3. DO NOT translate email addresses (e.g. support@chaishots.in, nairmalya@chaishots.in), telephone numbers (e.g. +91 8977721966), proper name nouns (e.g. Ms. Nairmalya Suryadevara, Plot no. 206, House No.3, Kavuri Hills, Hyderabad, Telangana, India - 500033 IN, Razorpay, Setu UPI Autopay, Google Media CDN, PostHog, Appsflyer, Intercom, CleverTap, Google Ads, Meta Ads, Chai Shots, ChaiShots), or URLs/paths. Keep these in English or Latin script.
4. Return ONLY valid JSON. Do not include markdown code block styling. No explanation.`;

  const body = {
    contents: [
      {
        role: 'user',
        parts: [
          { text: systemPrompt },
          { text: jsonString }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.1,
      responseMimeType: "application/json"
    }
  };

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Gemini API returned status ${res.status}: ${errText}`);
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new Error("No text in response candidates");
    }
    return text.trim();
  } catch (error) {
    console.error(`Error requesting Gemini API:`, error);
    throw error;
  }
}

async function run() {
  console.log("Starting translations using Gemini API...");
  
  for (const file of FILES) {
    const srcPath = path.join('src', 'locales', 'en', file);
    if (!fs.existsSync(srcPath)) {
      console.warn(`Source file not found: ${srcPath}`);
      continue;
    }
    
    const enContent = fs.readFileSync(srcPath, 'utf-8');
    
    for (const lang of TARGET_LANGS) {
      const destDir = path.join('src', 'locales', lang.code);
      const destPath = path.join(destDir, file);
      
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      console.log(`Translating ${file} into ${lang.name} (${lang.code})...`);
      
      let translatedJson = '';
      let retries = 3;
      while (retries > 0) {
        try {
          translatedJson = await translateText(enContent, lang.name);
          // Verify it parses as JSON
          JSON.parse(translatedJson);
          break;
        } catch (e) {
          retries--;
          console.error(`Failed to translate/parse JSON. Retries left: ${retries}. Error:`, e.message);
          if (retries === 0) {
            console.error(`Skipping ${lang.code}/${file} due to repeated errors.`);
          } else {
            // Sleep for 3 seconds before retry
            await new Promise(resolve => setTimeout(resolve, 3000));
          }
        }
      }
      
      if (translatedJson) {
        fs.writeFileSync(destPath, translatedJson, 'utf-8');
        console.log(`Saved translation: ${destPath}`);
      }
      
      // Rate limiting: sleep 2 seconds between translations
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log("Translations completed!");
}

run();
