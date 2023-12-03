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

// handle unhandledRejection error
process.on('unhandledRejection', () => {
  console.log(`😢 unhandledRejection is detected, shutting down server......`);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// handle uncaughtException error
process.on('uncaughtException', () => {
  console.log(`😢 uncaughtException is detected, shutting down server......`);
  process.exit(1);
});

// Promise.reject();
// console.log(x);
