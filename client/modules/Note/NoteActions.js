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
    lanes: notesData,
  };
}

export function updateNote(noteId) {
  return {
    type: UPDATE_NOTE,
    noteId: noteId,
    note,
  };
}

export function updateNoteRequest(noteId, note) {
  return (dispatch) => {
    return callApi('notes', 'put', { noteId, note }).then(noteResp => {
      dispatch(updateNote(noteResp, noteId));
    });
  };
}

export function changeNoteName(noteId) {
  return {
    type: UPDATE_NOTE,
    noteId: noteId,
  };
}

export function changeNoteNameRequest(note, laneId) {
  return (dispatch) => {
    return callApi('notes', 'put', { note, laneId }).then(noteResp => {
      dispatch(changeNoteName(noteResp, noteId));
    });
  };
}


export function editNote(noteId) {
  return {
    type: EDIT_NOTE,
    noteId,
  }
}

export function editNoteRequest(noteId) {
  return (dispatch) => {
    return callApi('notes', 'post', noteId ).then(noteResp => {
      dispatch(editNote(noteResp, noteId));
    });
  };
}


export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId,
  };
}

export function deleteNoteRequest(noteId, laneId) {
  return (dispatch) => {
    return callApi('notes', 'delete', { noteId, laneId }).then(resp => {
      dispatch(deleteNote(noteId, laneId));
    });
  };
 }
