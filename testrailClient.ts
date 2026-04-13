import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const testrail = axios.create({
  baseURL: `${process.env.RAIL_URL}/index.php?/api/v2`,
  auth: {
    username: process.env.RAIL_USER!,
    password: process.env.RAIL_API_KEY!,
  },
  headers: {
    "Content-Type": "application/json",
  },
});