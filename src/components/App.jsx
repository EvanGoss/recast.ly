class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: []
    };

    // this.setVideoList('ab');
  }

  componentDidMount() {
    this.setVideoList('ab');
  }

  setCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  // setVideoList(videoData) {
  //   this.setState({
  //     videoList: videoData
  //   });
  // }

  setVideoList(query) {
    var options = {
      q: query,
      part: 'snippet',
      type: 'video', 
      videoEmbeddable: true,
      maxResults: 10,
      key: window.YOUTUBE_API_KEY,
    };

    var setListState = (data) => this.setState({videoList: data});
    this.props.searchYouTube(options, setListState.bind(this)); 
  }

  render() {
    return (
      <div>
        <Nav setVideoList={this.setVideoList.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList setCurrentVideo={this.setCurrentVideo.bind(this)} videos={this.state.videoList}/>

        </div>
      </div>      
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

window.App = App;