import express, { request, response } from "express";
import connectDB from "./db.js";
import JobRouter from "./routes/JobRouter.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", JobRouter);

// Use the client app
app.use(express.static(path.join(__dirname, "/client/dist")));
//Render cli
app.get('*', (req, res) => {
  return res.sendFile( path.join(__dirname, '/client/dist/index.html'))
})


app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
