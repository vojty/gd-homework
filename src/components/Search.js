import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';

export default class Search extends Component {

  static propTypes = {
    keyword: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    onResetClick: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onResetClick = this.onResetClick.bind(this);
  }

  onResetClick() {
    this.props.onResetClick();
  }

  onChange(e) {
    const {
      onInputChange,
    } = this.props;
    const val = e.target.value.trim();
    onInputChange(val);
  }

  render() {
    const {
      keyword,
    } = this.props;

    return (
      <div>
        <input
          value={keyword}
          onChange={this.onChange}
          placeholder="Search..."
        />
      {keyword &&
        <button onClick={this.onResetClick}>Reset</button>
      }
      </div>
    );
  }
}
