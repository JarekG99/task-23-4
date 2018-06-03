import { connect } from 'react-redux';
import Notes from './Notes';
import * as noteActions from './NoteActions';
import { editNoteRequest, deleteNoteRequest, updateNoteRequest } from './NoteActions';

const mapDispatchToProps = {
  ...noteActions,

  onValueClick: editNoteRequest,
  onUpdate: updateNoteRequest,
  onDelete: deleteNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
