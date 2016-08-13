var Search = (props) => {
  // var updateList = function(query) {
  //   var options = {
  //     q: query,
  //     part: 'snippet',
  //     type: 'video', 
  //     videoEmbeddable: true,
  //     maxResults: 10,
  //     key: window.YOUTUBE_API_KEY,
  //   };
  //   searchYouTube( options, props.setVideoList(query) );
  // };

  var updateList = function(query) {
    props.setVideoList(query);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
