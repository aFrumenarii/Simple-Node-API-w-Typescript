import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ Message: "This message is comming from the back-end" });
});

app.listen(3333, () => {
  console.log("The server is listening on port 3333");
});
