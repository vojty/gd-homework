import { connect } from 'react-redux';
import { Form, NotesList, Search } from '../components';
import boxWrap from '../utils/boxWrap';
import Component from 'react-pure-render/component';
import mapDispatchToProps from '../utils/mapDispatchToProps';
import mapStateToProps from '../utils/mapStateToProps';
import React, { PropTypes } from 'react';

class App extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    notesApp: PropTypes.object.isRequired,
  };


  render() {
    const {
      actions,
      notesApp,
    } = this.props;

    const {
      form,
      notes,
      search,
    } = notesApp;

    return (
      <div>
        <h1>Notes</h1>

        {boxWrap(
          <Search
            keyword={search}
            onInputChange={actions.setSearchValue}
            onResetClick={actions.resetSearch}
          />
        )}

        {boxWrap(
          <Form
            form={form}
            onTagsChange={actions.setTags}
            onInputChange={actions.setInputValue}
            onResetClick={actions.resetForm}
            onSaveClick={actions.addNote}
          />
        )}

        <NotesList
          onRemoveButtonClick={actions.removeNote}
          notes={notes}
          search={search}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
