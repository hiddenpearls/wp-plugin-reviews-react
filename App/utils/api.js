var axios = require('axios');

module.exports = {
  fetchReviews: function(slug) {

    // var encodedURI = window.encodeURI('https://wordpress.org/support/plugin/' + slug + '/reviews/feed');
    //
    // return axios.get(encodedURI)
    //   .then(function (response) {
    //     var resp = '';
    //
    //     parseString(response.data, function (err, result) {
    //
    //        resp = result.rss.channel[0].item;
    //
    //     });
    //     return resp ? resp : 'Not Avalaibe';
    //   });


    return axios.get('http://test.psd2htmldesign.com/wp_dev/endpoint.php?plugin=' + slug  )
      .then(function (response) {
        return response.data ? response : 'Not Avalaibe';
      });

  }
};
