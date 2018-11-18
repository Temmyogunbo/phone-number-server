import hapiBodyparser from 'hapi-bodyparser';
import hapiPino from 'hapi-pino';
import dotenv from 'dotenv';

dotenv.config();

export const manifest = {
  server: {
    port: process.env.PORT,
    routes: {
      cors: true,
    },
  },
  register: {
    plugins: [
      {
        plugin: hapiBodyparser,
        options: {
          parser: { allowDots: true, strictNullHandling: true },
          sanitizer: {
            trim: true,
            stripNullorEmpty: true,
          },
          merge: false,
          body: false,
        },
      },
      {
        plugin: hapiPino,
        options: {
          prettyPrint: true,
          logEvents: ['response', 'onPostStart'],
        },
      },
      {
        plugin: './routes/phoneNumbersGenerator',
        routes: {
          prefix: '/api/v1',
        },
      },
    ],
    options: {
      once: true,
    },
  },
};

export const options = {
  relativeTo: __dirname,
};
