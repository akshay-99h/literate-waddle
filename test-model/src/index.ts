import express from "express";
import * as model from "./model.json";
import * as tf from "@tensorflow/tfjs";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const testModel = await tf.loadLayersModel(
    "https://raw.githubusercontent.com/akshay-99h/literate-waddle/master/model.json",
  );
  // const prediction = testModel.predict(
  //   "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
  // );
  console.log({ testModel });
  res.send("Hello, Express with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
