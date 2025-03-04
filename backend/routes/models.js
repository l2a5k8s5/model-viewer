const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase"); // Import Firestore config

// Test Firestore connection & fetch data
router.get("/test-firestore", async (req, res) => {
  try {
    const snapshot = await db.collection("models").get();

    if (snapshot.empty) {
      return res.json({ message: "No data found" });
    }

    let data = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
