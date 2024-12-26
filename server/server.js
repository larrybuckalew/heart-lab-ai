const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const emailService = require('./email-service');
const emailTracking = require('./email-tracking');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Email endpoints
app.post('/api/send-email', async (req, res) => {
    try {
        await emailService.sendFormNotification(req.body);
        res.json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Email tracking endpoints
app.get('/api/track/open/:emailId', async (req, res) => {
    try {
        await emailTracking.trackOpen(req.params.emailId);
        // Return a 1x1 transparent pixel
        res.writeHead(200, {
            'Content-Type': 'image/gif',
            'Content-Length': '43'
        });
        res.end('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'binary');
    } catch (error) {
        console.error('Tracking error:', error);
        res.status(500).json({ error: 'Failed to track email open' });
    }
});

app.get('/api/track/click/:emailId/:linkId', async (req, res) => {
    try {
        await emailTracking.trackClick(req.params.emailId, req.params.linkId);
        res.redirect(req.query.url);
    } catch (error) {
        console.error('Tracking error:', error);
        res.status(500).json({ error: 'Failed to track link click' });
    }
});

// Main routes
app.get(['/', '/services', '/pricing', '/demo', '/about', '/contact'], (req, res) => {
    const page = req.path === '/' ? 'index' : req.path.substring(1);
    res.sendFile(path.join(__dirname, '..', `${page}.html`));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});