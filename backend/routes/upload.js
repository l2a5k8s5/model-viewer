const express = require('express');
const { db } = require('../config/firebase');

const router = express.Router();

// Upload model data (name, description, URL)
router.post('/', async (req, res) => {
    const { name, description, url } = req.body;

    if (!name || !url) return res.status(400).json({ error: 'Missing required fields' });

    try {
        const newModel = { name, description, url, uploadDate: new Date().toISOString() };
        const docRef = await db.collection('models').add(newModel);
        res.json({ id: docRef.id, ...newModel });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
