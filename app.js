import express from "express";
import reportRouter from "./routes/reportsRouter.js";

const app = express();
const PORT = process.env.PORT || 3008;

app.use(express.json());

app.use("/report", reportRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
