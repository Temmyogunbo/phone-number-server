import Glue from 'glue';
import { manifest, options } from './manifest';

export const init = async (start) => {
  try {
    const server = await Glue.compose(
      manifest,
      options,
    );

    if (!start) return server;

    await server.start();
    process.stdout.write(`server running on port ${process.env.PORT}\n`);
  } catch (err) {
    throw err;
  }
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

if (!module.parent) {
  init(true);
}

export default init;
