var axios = require('axios');

class api {
    get (input) {
      return axios.get('https://api.github.com/users/codeheaven-io')
        .then(function(response) {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
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
