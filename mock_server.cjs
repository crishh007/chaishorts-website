const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const users = []; 

app.post('/api/auth/register', (req, res) => {
  const { username, email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users.push({ username, email, password });
  console.log('Registered:', email);
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    console.log('Login success:', email);
    res.json({ message: 'Login successful', user: { username: user.username, email: user.email } });
  } else {
    console.log('Login failed:', email);
    res.status(400).json({ message: 'Invalid email or password' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Mock Server running on port ${PORT}`);
});
