import callApi from '../../util/apiCaller';

// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

// Export Actions
export function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId: laneId,
    note: note,
  };
}

export function createNoteRequest(note, laneId) {
  return (dispatch) => {
    return callApi('notes', 'post', { note, laneId }).then(noteResp => {
      dispatch(createNote(noteResp, laneId));
    });
  };
}

export function createNotes(notesData) {
  return {
    type: CREATE_NOTES,
    notes: notesData,
  };
}

export function updateNote(noteId, note) {
  return {
    type: UPDATE_NOTE,
    noteId: noteId,
    note,
  };
}

export function updateNoteRequest(noteId, note) {
  return (dispatch) => {
    return callApi('notes/'+note.id, 'put', {noteId, note} ).then(res => {
      dispatch(updateNote(res.note.id, res.note));
    });
  };
}

export function changeNoteName(noteId) {
  return {
    type: UPDATE_NOTE,
    noteId: noteId,
    laneId: laneId,
  };
}

export function changeNoteNameRequest(noteId, laneId) {
  return (dispatch) => {
    return callApi('notes/'+noteId, 'put', { noteId, laneId }).then(noteResp => {
      dispatch(changeNoteName(noteResp, noteId));
    });
  };
}


export function editNote(noteId) {
  return {
    type: EDIT_NOTE,
    noteId: noteId,
  }
}

export function editNoteRequest(noteId) {
  return (dispatch) => {
    return callApi('notes/'+noteId, 'put', {noteId} ).then(resp => {
      dispatch(editNote(noteId));
    });
  };
}


export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId: noteId,
    laneId: laneId,
  };
}

export function deleteNoteRequest(noteId, laneId) {
  return (dispatch) => {
    return callApi('notes/'+noteId, 'delete', { noteId, laneId }).then(resp => {
      dispatch(deleteNote(noteId, laneId));
    });
  };
 }
