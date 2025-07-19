import InvariantError from '../../exceptions/InvariantError';
import default from './schema';
const { NotePayloadSchema } = default;

const NotesValidator =  {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default NotesValidator;