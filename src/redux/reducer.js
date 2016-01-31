import { List } from 'immutable';
import * as actions from './actions';
import InitialState from './InitialState';
import NoteRecord from '../utils/NoteRecord';
import uuid from 'node-uuid';

const initialState = new InitialState;


function restoreState(state) {
  const {
    form,
    notes,
    search,
  } = state;
  return initialState.merge({
    /* notes: notes.map(note => {
      const nr = new NoteRecord({
        id: note.id,
        tags: List.of(note.tags),
        text: note.text,
        createdAt: note.createdAt,
      });
      return nr;
    }),*/
    /* notes: notes.map(note => {
      const tags = new List(note.tags);
      return new NoteRecord({
        id: note.id,
        tags,
        text: note.text,
        createdAt: note.createdAt,
      });
    }),*/
    notes: notes.map(note => new NoteRecord(note)),
    form: new NoteRecord({
      tags: new List(form.tags),
      text: form.text,
    }),
    search,
  });
}

export default function notesReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) {
    state = restoreState(state); // eslint-disable-line
  }

  switch (action.type) {
    case actions.SET_INPUT_VALUE: {
      const {
        inputName,
        value,
      } = action.payload;
      return state.setIn(['form', inputName], value);
    }

    case actions.SET_TAGS: {
      const {
        tags,
      } = action.payload;
      return state.setIn(['form', 'tags'], new List(tags));
    }

    case actions.ADD_NOTE: {
      const {
        note,
      } = action.payload;
      const newNote = note.set('id', uuid.v1()).set('createdAt', new Date().toISOString());
      return state.update('notes', notes => notes.unshift(newNote))
                  .set('form', new NoteRecord());
    }

    case actions.REMOVE_NOTE: {
      const {
        note,
      } = action.payload;
      return state.update('notes', (notes) => {
        const index = notes.findIndex(n => n.id === note.id);
        return notes.delete(index);
      });
    }

    case actions.SET_SEARCH_VALUE: {
      const {
        value,
      } = action.payload;
      return state.set('search', value);
    }

    case actions.RESET_FORM: {
      return state.set('form', new NoteRecord());
    }

    case actions.RESET_SEARCH: {
      return state.set('search', '');
    }

    default:
      return state;
  }

  return state;
}
