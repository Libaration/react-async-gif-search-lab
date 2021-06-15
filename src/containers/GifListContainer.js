import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }
  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.results} />
      </div>
    );
  }

  fetchGifs = async (e, searchRef) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchRef}&api_key=UQRMpmg2DzXTUWljQUo0LmZUptSA0ymu`
    );
    const results = await response.json();
    this.setState({
      results: results.data.slice(0, 3),
    });
  };
}

export default GifListContainer;
