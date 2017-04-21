var request = require('request');

class api {
    get (input) {
      return request('http://www.google.com', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
    }

    post (input) {
      return input.toString(2);
    }

    put (input) {
      return input.toString(2);
    }

    delete (input) {
      return input.toString(2);
    }
}

export default api;
