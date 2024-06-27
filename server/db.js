import 'dotenv/config'
import mongoose from "mongoose";

export default function connectDB() {
  const url = `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.djyudka.mongodb.net/Jobs?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}
