const express = require("express");
const cors = require("cors");
const app = express();

const modelRoutes = require("./routes/models");

app.use(cors());
app.use(express.json());
app.use("/models", modelRoutes); // Mount your routes under "/models"

app.get("/test-firestore", (req, res) => {
  res.send("Firestore route is working!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
