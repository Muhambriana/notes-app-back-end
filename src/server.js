require('dotenv').config();

import { server as _server } from '@hapi/hapi';
import notes from './api/notes';
import NotesService from './services/inMemory/NotesService';
import NotesValidator from './validator/notes';
import ClientError from './exceptions/ClientError';

const init = async () => {
  const notesService = new NotesService();

  const server = _server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });


  await server.register({
    plugin: notes,
    options: {
      service: notesService,
      validator: NotesValidator,
    }
  });

  server.ext('onPreResponse', (request, h) => {
    const { response } = request;

    if (response instanceof ClientError) {
      const newResponse = h.response({
        status: 'fail',
        message: response.message,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    return h.continue;
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();