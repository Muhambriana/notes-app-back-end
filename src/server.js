const Hapi = require('@hapi/hapi');
const notesPlugins =  require('./notes_plugins');

const init = async () => {
  const server = Hapi.server();

  await server.register({
    plugin: notesPlugins,
    options: { notes:  [] }
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
