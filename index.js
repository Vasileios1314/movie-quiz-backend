const express = require("express");
const cors = require("cors");
const quizRouter = require("./routers/quiz");
const { PORT } = require("./config/constants");

const app = express();

app.use(cors());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use("/quiz", quizRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
