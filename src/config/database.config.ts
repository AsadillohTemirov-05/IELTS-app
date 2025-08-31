
import dotenv from "dotenv";

dotenv.config();

export const databaseConfig = {
  uri: process.env.MONGO_URI || 'mongodb://localhost/ielts-project',
};