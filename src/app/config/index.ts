import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DB_URL,
  bycript_sald_rounds: process.env.BYCRIPT_SOLD_ROUNDS,
  default_passwors: process.env.DEFAULT_PASS,
};
