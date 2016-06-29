import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'

const YT_API_KEY = ''

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {videos: []};
    YTSearch({key: YT_API_KEY, term: 'surfboards'}, videos => {
      this.setState({videos});
      console.log(this.state.videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos }/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
