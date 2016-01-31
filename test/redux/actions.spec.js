import { expect } from 'chai';
import * as actions from '../../src/redux/actions';
import NoteRecord from '../../src/utils/NoteRecord';

describe('action creator', () => {
  it('creates REMOVE_NOTE', () => {
    const note = NoteRecord({
      id: 5,
    });
    const expectedAction = {
      type: actions.REMOVE_NOTE,
      payload: {
        note,
      },
    };
    expect(actions.removeNote(note)).to.deep.equal(expectedAction);
  });

  it('creates RESET_FORM', () => {
    const expectedAction = {
      type: actions.RESET_FORM,
    };
    expect(actions.resetForm()).to.deep.equal(expectedAction);
  });

  it('creates RESET_SEARCH', () => {
    const expectedAction = {
      type: actions.RESET_SEARCH,
    };
    expect(actions.resetSearch()).to.deep.equal(expectedAction);
  });

  it('creates SET_TAGS', () => {
    const expectedAction = {
      type: actions.SET_TAGS,
      payload: {
        tags: ['A', 'B'],
      },
    };
    expect(actions.setTags(['A', 'B'])).to.deep.equal(expectedAction);
  });

  it('creates ADD_NOTE', () => {
    const note = NoteRecord({
      id: 5,
    });
    const expectedAction = {
      type: actions.ADD_NOTE,
      payload: {
        note,
      },
    };
    expect(actions.addNote(note)).to.deep.equal(expectedAction);
  });

  it('creates SET_INPUT_VALUE', () => {
    const inputName = 'text';
    const value = 'asd';
    const expectedAction = {
      type: actions.SET_INPUT_VALUE,
      payload: {
        inputName,
        value,
      },
    };
    expect(actions.setInputValue(inputName, value)).to.deep.equal(expectedAction);
  });

  it('creates SET_SEARCH_VALUE', () => {
    const value = 'asd';
    const expectedAction = {
      type: actions.SET_SEARCH_VALUE,
      payload: {
        value,
      },
    };
    expect(actions.setSearchValue(value)).to.deep.equal(expectedAction);
  });
});
