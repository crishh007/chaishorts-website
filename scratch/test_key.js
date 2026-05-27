const API_KEY = 'AIzaSyBUlIznt_JpzcXNBUyJii1oHvYa_zBtStY';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;

async function testKey() {
  console.log('Testing new API key...');
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: 'Hello!' }] }]
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('API Error:', JSON.stringify(data, null, 2));
    } else {
      console.log('Success! Key is working perfectly.');
      console.log('Response:', data?.candidates?.[0]?.content?.parts?.[0]?.text);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

testKey();
