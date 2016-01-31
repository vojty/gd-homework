import boxWrap from '../utils/boxWrap';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';

export default class Note extends Component {

  static propTypes = {
    note: PropTypes.object.isRequired,
    onRemoveButtonClick: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    const {
      note,
      onRemoveButtonClick,
    } = this.props;
    onRemoveButtonClick(note);
  }

  render() {
    const {
      note,
    } = this.props;

    return boxWrap(
      <div>
        <span>Created at: {note.createdAt}</span>
        <p>{note.text}</p>
        <div className="tags">
          {note.tags.map((tag, key) =>
            <span key={key} className="react-tagsinput-tag">{tag}</span>
          )}
        </div>
        <button onClick={this.onButtonClick}>Delete</button>
      </div>
    );
  }
}
