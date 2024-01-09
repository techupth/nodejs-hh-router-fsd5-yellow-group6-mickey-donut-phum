import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./app/assignments.js";
import accountRouter from "./app/accounts.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/assignments", assignmentRouter);
app.use("/accounts", accountRouter);

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
