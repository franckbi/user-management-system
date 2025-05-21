import express from "express";
import cors from "cors";
import userRouter from "./routes/users";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
app.use(cors(), express.json());
app.use("/api/users", userRouter);

//404 for unknown routes
app.use((_req, _res, next) => {
  const err = new Error("Not Found");
  (err as any).status = 404;
  next(err);
});

//centralized error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
