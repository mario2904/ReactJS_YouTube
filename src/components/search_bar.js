import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''}
  }
  
  render() {
    return (
      <div>
        <input value={ this.state.term } onChange={ this.onInputChange.bind(this) }/>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
}
