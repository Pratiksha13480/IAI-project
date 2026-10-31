import express from 'express';
import path from 'path';
import 'dotenv/config';
import {
  checkGeminiStatus,
  analyzeEmailWithGemini,
  generateSmartReplyWithGemini,
} from './server/geminiService';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API Endpoints
app.get('/api/gemini/status', async (_req, res) => {
  try {
    const status = await checkGeminiStatus();
    res.json(status);
  } catch (err: any) {
    res.status(500).json({ available: false, error: err.message });
  }
});

app.post('/api/gemini/analyze', async (req, res) => {
  try {
    const { sender, subject, body, receivedAt } = req.body;
    if (!subject && !body) {
      return res.status(400).json({ error: 'Subject or body is required' });
    }
    const analysis = await analyzeEmailWithGemini({
      sender: sender || 'Unknown',
      subject: subject || '',
      body: body || '',
      receivedAt,
    });
    res.json({ success: true, ...analysis });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/gemini/smart-reply', async (req, res) => {
  try {
    const { email, tone, userNotes } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email object is required' });
    }
    const reply = await generateSmartReplyWithGemini({
      email,
      tone: tone || 'professional',
      userNotes,
    });
    res.json({ success: true, ...reply });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Serve static assets in production
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`SmartMail AI server running on port ${PORT}`);
});
