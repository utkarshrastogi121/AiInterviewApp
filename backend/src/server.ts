import "dotenv/config";

import app from "./app";


app.get("/", (_, res) => {
  res.send("API is running ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});