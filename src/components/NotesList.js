import boxWrap from '../utils/boxWrap';
import Component from 'react-pure-render/component';
import Note from './Note';
import React, { PropTypes } from 'react';

export default class NotesList extends Component {

  static propTypes = {
    notes: PropTypes.object.isRequired,
    onRemoveButtonClick: PropTypes.func.isRequired,
    search: PropTypes.string,
  };

  filterNotes() {
    const {
      notes,
      search,
    } = this.props;
    if (!search) {
      return notes;
    }
    const regexp = new RegExp(search, 'i');
    return notes.filter((note) => {
      if (regexp.test(note.text)) {
        return true;
      }
      if (note.tags.some(tag => regexp.test(tag))) {
        return true;
      }
      return false;
    });
  }

  render() {
    const {
      notes,
      onRemoveButtonClick,
      search,
    } = this.props;

    const filteredNotes = this.filterNotes();

    if (!search && notes.count() === 0) {
      return boxWrap(
        <div>Add some note</div>
      );
    }

    if (search && filteredNotes.count() === 0) {
      return boxWrap(
        <div>Can't find any notes with "{search}"</div>
      );
    }

    return (
      <div>
        <p>
          Total notes: {notes.count()}
          {search && filteredNotes.count() > 0 &&
            <span>
              , found: {filteredNotes.count()}
            </span>
          }
        </p>
        {filteredNotes.map(note =>
          <Note
            key={note.id}
            note={note}
            onRemoveButtonClick={onRemoveButtonClick}
          />
        )}
      </div>
    );
  }
}
