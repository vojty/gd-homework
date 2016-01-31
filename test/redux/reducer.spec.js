import { expect } from 'chai';
import { List } from 'immutable';
import NoteRecord from '../../src/utils/NoteRecord';
import reducer from '../../src/redux/reducer';

function prepareState() {
  const state = {
    form: {
      id: null,
      createdAt: null,
      tags: new List(),
      text: 'onetwo',
    },
    search: 'qwertz',
    notes: [{
      id: 1,
      createdAt: null,
      tags: [],
      text: 'yxcvb',
    }],
  };
  return state;
}

describe('reducer', () => {
  it('handles REMOVE_NOTE', () => {
    const state = prepareState();

    const action = {
      type: 'notes/REMOVE_NOTE',
      payload: {
        note: NoteRecord({
          id: 1,
        }),
      },
    };
    const nextState = reducer(state, action);
    expect(nextState.notes.count()).to.equal(0);
  });

  it('handles RESET_SEARCH', () => {
    const action = {
      type: 'notes/RESET_SEARCH',
    };
    const state = prepareState();
    expect(state.search).to.equal('qwertz');
    const nextState = reducer(state, action);
    expect(nextState.search).to.equal('');
  });

  it('handles SET_TAGS', () => {
    const action = {
      type: 'notes/SET_TAGS',
      payload: {
        tags: ['A', 'B'],
      },
    };
    const state = prepareState();
    expect(state.form.tags.count()).to.equal(0);
    const nextState = reducer(state, action);
    expect(nextState.form.tags.count()).to.equal(2);
    expect(nextState.form.tags.first()).to.equal('A');
    expect(nextState.form.tags.last()).to.equal('B');
  });

  it('handles RESET_FORM', () => {
    const action = {
      type: 'notes/RESET_FORM',
    };
    const state = prepareState();
    expect(state.form.text).to.equal('onetwo');
    const nextState = reducer(state, action);
    expect(nextState.form).to.equal(new NoteRecord);
  });

  it('handles SET_INPUT_VALUE', () => {
    const action = {
      type: 'notes/SET_INPUT_VALUE',
      payload: {
        value: 'ASD',
        inputName: 'text',
      },
    };
    const state = prepareState();
    const nextState = reducer(state, action);
    expect(nextState.form.text).to.equal('ASD');
  });

  it('handles SET_SEARCH_VALUE', () => {
    const action = {
      type: 'notes/SET_SEARCH_VALUE',
      payload: {
        value: '123',
      },
    };
    const state = prepareState();
    const nextState = reducer(state, action);
    expect(nextState.search).to.equal('123');
  });

  it('handles ADD_NOTE', () => {
    const action = {
      type: 'notes/ADD_NOTE',
      payload: {
        note: NoteRecord({
          text: 'text',
        }),
      },
    };
    const nextState = reducer(undefined, action);
    expect(nextState.notes.count()).to.equal(1);
  });
});
