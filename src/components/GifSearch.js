import React from 'react';

class GifSearch extends React.Component {
  constructor() {
    super();
    this.searchRef = React.createRef();
    this.state = {
      search: '',
    };
  }
  render() {
    return (
      <form onSubmit={(e) => this.props.fetchGifs(e, this.state.search)}>
        <input
          type="text"
          id="search"
          value={this.state.search}
          onChange={(e) => this.handleChange(e)}
          className="form-control"
          placeholder="Search"
          autoComplete="off"
          ref={this.searchRef}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    let currentText = this.searchRef.current.value;
    this.props.fetchGifs(e, currentText);
    //If I use state to search it's always searching one letter behind? Async call ? Using a reference works tho
  };
}

export default GifSearch;
