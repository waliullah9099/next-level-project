import mongoose from 'mongoose';
import { Server } from 'http';
import app from './app';
import config from './app/config';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on('unhandledRejection', () => {
  console.log(`😢 unhandledRejection is detected, shutting down server......`);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
