import InvariantError from '../../exceptions/InvariantError';
import schema from './schema';
const { NotePayloadSchema } = schema;

const NotesValidator =  {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default NotesValidator;