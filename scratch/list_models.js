const API_KEY = 'AIzaSyBUlIznt_JpzcXNBUyJii1oHvYa_zBtStY';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

async function listModels() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    if (data.models) {
      console.log('Available models:');
      data.models.filter(m => m.name.includes('flash')).forEach(m => {
        console.log(`- ${m.name} (Methods: ${m.supportedGenerationMethods.join(', ')})`);
      });
    } else {
      console.log('Error:', data);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

listModels();
