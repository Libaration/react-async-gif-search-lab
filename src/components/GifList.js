import React from 'react';

class GifList extends React.Component {
  render() {
    return (
      <div className="gifComponent">
        {this.props.gifs.map((gif) => {
          return (
            <img
              src={gif.images.original.url}
              id={gif.id}
              key={gif.id}
              alt=""
            />
          );
        })}
      </div>
    );
  }
}

this.defaultProps = {
  gifs: [],
};
export default GifList;
