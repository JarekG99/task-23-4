import { connect } from 'react-redux';
import Notes from './Notes';
import * as noteActions from './NoteActions';
import { editNoteRequest, deleteNoteRequest, createNoteRequest } from './NoteActions';

const mapDispatchToProps = {
  ...noteActions,
  addNote: createNoteRequest,
  editNote: editNoteRequest,
  deleteNote: deleteNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
