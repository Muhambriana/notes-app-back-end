exports.up = (pgm) => {
  pgm.renameColumn('notes', 'update_at', 'updated_at');
};

exports.down = (pgm) => {
  pgm.renameColumn('notes', 'updated_at', 'update_at');
};