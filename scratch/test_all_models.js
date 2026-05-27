const API_KEY = 'AIzaSyBDrObKJbvfXYRK_LSET35fG18gPDOemEo';

const models = [
  'gemini-1.5-flash',
  'gemini-1.5-pro',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemini-2.5-flash'
];

async function testAll() {
  for (const model of models) {
    console.log(`\nTesting ${model}...`);
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: 'hi' }] }]
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        console.error(`❌ Failed:`, data.error.message.substring(0, 150));
      } else {
        console.log(`✅ Success! Response:`, data?.candidates?.[0]?.content?.parts?.[0]?.text);
      }
    } catch (e) {
      console.error(`❌ Fetch error:`, e.message);
    }
  }
}

testAll();
