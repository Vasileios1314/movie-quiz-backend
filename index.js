const express = require("express");
const corsMiddleWare = require("cors");
const quizRouter = require("./routers/quiz");
const { PORT } = require("./config/constants");

const app = express();

app.use(corsMiddleWare());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use("/quiz", quizRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
