import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import events from 'events';

// Routers
import pairRouter from './pair.js';
import qrRouter from './qr.js';

const app = express();

// Increase max listeners (avoid memory warning)
events.EventEmitter.defaultMaxListeners = 500;

// Resolve directory (ESM fix)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Render provides PORT automatically
const PORT = process.env.PORT || 5000;

// Trust proxy (important for Render)
app.set('trust proxy', 1);

// ===== Middleware =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    next();
});

app.use(express.static(__dirname));

// ===== Routes =====
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pair.html'));
});

app.use('/pair', pairRouter);
app.use('/qr', qrRouter);

// ===== Global Error Handler =====
app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
});

// ===== Start Server =====
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on PORT: ${PORT}`);
});
