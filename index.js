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
      var config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      return axios.post('http://localhost:7700/pdm/v1/validation2',
          input,
          config
        )
        .then(function(response) {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
        });
    }

    put (input) {
      var config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      return axios.put('http://localhost:7700/pdm/v1/validation2',
          input,
          config
        )
        .then(function(response) {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
        });
    }

    delete (input) {
      return input.toString(2);
    }
}

export default api;
