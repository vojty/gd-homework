import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import TagsInput from 'react-tagsinput';

export default class Form extends Component {

  static propTypes = {
    form: PropTypes.object.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onResetClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onTagsChange: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onSaveClick() {
    const { form } = this.props;
    if (form.text) {
      this.props.onSaveClick(this.props.form);
    }
  }

  onTagsChange(tags) {
    this.props.onTagsChange(tags.filter((value, index, array) =>
      array.indexOf(value) === index
    ));
  }

  onTextChange(e) {
    const {
      onInputChange,
    } = this.props;
    const {
      value,
      name,
    } = e.target;
    onInputChange(name, value);
  }

  render() {
    const {
      form,
      onResetClick,
    } = this.props;

    return (
      <div>
        <p>
          <label htmlFor="text">New note</label>
        </p>

        <p>
          <textarea
            id="text"
            name="text"
            onChange={this.onTextChange}
            value={form.text}
          />
        </p>

        <p>
          Tags
        </p>

        <TagsInput
          value={form.tags.toArray()}
          onChange={this.onTagsChange}
          addOnBlur
        />

        <button onClick={this.onSaveClick}>Save</button>
        <button onClick={onResetClick}>Reset</button>
      </div>
    );
  }
}
