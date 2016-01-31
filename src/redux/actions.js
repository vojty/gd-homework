export const ADD_NOTE = 'notes/ADD_NOTE';
export const REMOVE_NOTE = 'notes/REMOVE_NOTE';
export const RESET_FORM = 'notes/RESET_FORM';
export const RESET_SEARCH = 'notes/RESET_SEARCH';
export const SET_INPUT_VALUE = 'notes/SET_INPUT_VALUE';
export const SET_SEARCH_VALUE = 'notes/SET_SEARCH_VALUE';
export const SET_TAGS = 'notes/SET_TAGS';

export function setTags(tags) {
  return {
    type: SET_TAGS,
    payload: {
      tags,
    },
  };
}

export function resetForm() {
  return {
    type: RESET_FORM,
  };
}

export function resetSearch() {
  return {
    type: RESET_SEARCH,
  };
}

export function removeNote(note) {
  return {
    type: REMOVE_NOTE,
    payload: {
      note,
    },
  };
}

export function addNote(note) {
  return {
    type: ADD_NOTE,
    payload: {
      note,
    },
  };
}

export function setSearchValue(value) {
  return {
    type: SET_SEARCH_VALUE,
    payload: {
      value,
    },
  };
}

export function setInputValue(inputName, value) {
  return {
    type: SET_INPUT_VALUE,
    payload: {
      inputName,
      value,
    },
  };
}
