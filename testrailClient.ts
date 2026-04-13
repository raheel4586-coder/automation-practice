import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseURL = process.env.RAIL_URL!;
const username = process.env.RAIL_USER!;
const apiKey = process.env.RAIL_API_KEY!;

const auth = Buffer.from(`${username}:${apiKey}`).toString("base64");

export const testrail = axios.create({
  baseURL: `${baseURL}/index.php?/api/v2`,
  headers: {
    "Authorization": `Basic ${auth}`,
    "Content-Type": "application/json",
  },
});