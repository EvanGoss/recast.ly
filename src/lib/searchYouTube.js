// var options = {
//   q: 'test',
//   part: 'snippet',
//   type: 'video', 
//   videoEmbeddable: true,
//   maxResults: 10,
//   key: 'AIzaSyBGsJwzEV3imO18y9cVbm0udoQGwJskxoI'
// };

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    'Content-Type': 'application/json',
    data: {
      q: options.query,
      part: 'snippet',
      type: 'video', 
      videoEmbeddable: true,
      maxResults: options.max,
      key: options.key,
    },
    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
      // console.log(callback);
      console.log('There was an error: ', error);
    },
  }).done();
};

window.searchYouTube = searchYouTube;

// searchYouTube(options, function() {});

// After the API loads, call a function to enable the search box.
// function handleAPILoaded() {
//   $('#search-button').attr('disabled', false);
// }

// // Search for a specified string.
// function search() {
//   var q = $('#query').val();
//   var request = gapi.client.youtube.search.list({
//     q: q,
//     part: 'snippet'
//   });

//   request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     $('#search-container').html('<pre>' + str + '</pre>');
//   });
// }