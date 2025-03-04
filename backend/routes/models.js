const express = require('express');
const { db } = require('../config/firebase');

const router = express.Router();

// Get all models
router.get('/', async (req, res) => {
    try {
        const snapshot = await db.collection('models').get();
        const models = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(models);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
